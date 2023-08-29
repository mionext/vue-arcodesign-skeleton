<template>
  <div class="flex content-center justify-center items-center h-full">
    <a-form
        @submit="onSubmit"
        ref="formRef"
        layout="vertical"
        :model="form"
        style="width: 320px"
        class="shadow p-5 rounded bg-white"
    >
      <a-typography-title :heading="4" class="!mt-0"> {{ siteName }}</a-typography-title>
      <a-form-item field="mobile" validate-trigger="input" class="!mb-2">
        <a-input
            :rules="[{ required: true, message: '请输入账号' }]"
            :max-length="11"
            autofocus
            v-model="form.mobile"
            placeholder="账号"
            allow-clear
        >
          <template #prefix>
            <icon-user/>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item field="password" validate-trigger="blur" class="!mb-2">
        <a-input-password :max-length="32" v-model="form.password" placeholder="密码">
          <template #prefix>
            <icon-lock/>
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item field="captcha" validate-trigger="blur" class="!mb-0">
        <a-input v-model="form.captcha" :max-length="6" placeholder="验证码" allow-clear>
          <template #prefix>
            <icon-robot/>
          </template>
          <template #append>
            <div class="cursor-pointer flex justify-center" @click="fetchCaptcha" title="点击刷新">
              <a-spin :loading="captchaLoading" class="w-full block w-20">
                <img :src="captcha?.data.captcha"/>
              </a-spin>
            </div>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item field="keepalive" validate-trigger="blur" class="!mb-1">
        <div class="flex w-full">
          <div class="w-1/2 text-left flex content-center">
            <a-checkbox v-model="form.keep"> 记住我</a-checkbox>
          </div>
          <div class="w-1/2 text-right">
            <a-link :hoverable="false" href="#" class="!text-xs">忘记密码?</a-link>
          </div>
        </div>
      </a-form-item>
      <a-alert type="warning" v-if="signInError">{{ signInError }}</a-alert>
      <a-form-item class="!mb-1">
        <a-button :loading="submitLoading" :disabled="!form.mobile || !form.password" html-type="submit" long
                  type="primary"
        > 登 录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import {reactive, type Ref, ref, watch} from 'vue'
import type {FormContext} from '@arco-design/web-vue/es/form/context'
import {useRequest} from 'vue-request'
import http from '@/utils/http'

const siteName = import.meta.env.VITE_APP_NAME
const form = reactive({mobile: '', password: '', captcha: '', phrase: '', keep: false})
const formRef: Ref<FormContext | any> = ref()

const {
  run: onSubmit,
  loading: submitLoading,
  error: signInError
} = useRequest(() => http.post('/auth/sign-in', form), {manual: true})

const {
  data: captcha,
  run: fetchCaptcha,
  loading: captchaLoading
} = useRequest(() => http.get('captcha'), {debounceInterval: 300})

watch(captcha, (value) => Object.assign(form, {...form, phrase: value.data.phrase}))
</script>

<style lang="css">
.arco-input-append {
  border-left: 0 !important;
  padding-right: 2px !important;
  padding-left: 2px !important;
}
</style>
