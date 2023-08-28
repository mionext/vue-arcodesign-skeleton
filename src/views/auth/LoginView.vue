<template>
  <div class="flex content-center justify-center items-center h-full">
    <a-form
      @submit="onLoginSubmit"
      ref="loginForm"
      layout="vertical"
      :model="form"
      style="width: 290px"
      class="shadow p-5 rounded bg-white"
    >
      <a-typography-title :heading="5" class="!mt-0"> 登录 </a-typography-title>
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
            <icon-user />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item field="password" validate-trigger="blur" class="!mb-2">
        <a-input-password :max-length="32" v-model="form.password" placeholder="密码">
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item field="captcha" validate-trigger="blur" class="!mb-0">
        <a-input v-model="form.captcha" :max-length="6" placeholder="验证码" allow-clear>
          <template #prefix>
            <icon-robot />
          </template>
          <template #append>
            <a-spin :size="18">
              <span class="cursor-pointer">
                <img @click="fetchCaptcha" :src="captcha.captcha" />
              </span>
            </a-spin>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item field="keepalive" validate-trigger="blur" class="!mb-1">
        <div class="flex w-full">
          <div class="w-1/2 text-left flex content-center">
            <a-checkbox v-model="form.keepalive"> 记住我</a-checkbox>
          </div>
          <div class="w-1/2 text-right">
            <a-link :hoverable="false" href="#" class="!text-xs">忘记密码?</a-link>
          </div>
        </div>
      </a-form-item>

      <a-form-item class="!mb-1">
        <a-button html-type="submit" long type="primary">登 录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, type Ref, ref } from 'vue'
import type { FormContext } from '@arco-design/web-vue/es/form/context'

onMounted(() => {
  fetchCaptcha()
})

const captcha = ref({ captcha: '', phrase: '' })
const form = reactive({
  mobile: '',
  password: '',
  keepalive: false,
  captcha: ''
})

const fetchCaptcha = async () => {
  const response = await fetch('http://lumen-php82-skeleton.test/captcha')
  captcha.value = await response.json()
}

const loginForm: Ref<FormContext | any> = ref()
const onLoginSubmit = ({ values, errors }: any, e: SubmitEvent) => {
  console.log(values, errors, e)
}
</script>

<style lang="css">
.arco-input-append {
  border-left: 0 !important;
  padding-right: 2px !important;
  padding-left: 2px !important;
}
</style>
