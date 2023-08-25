<template>
  <div class="flex content-center justify-center items-center h-full">
    <a-spin size="28px" style="width: 300px">
      <a-form layout="vertical" :model="form">
        <a-form-item field="mobile" validate-trigger="input">
          <a-input :max-length="11" v-model="form.mobile" placeholder="账号" allow-clear>
            <template #prefix>
              <icon-user/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item field="password" validate-trigger="blur">
          <a-input-password :max-length="32" v-model="form.password" placeholder="密码">
            <template #prefix>
              <icon-lock/>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button  html-type="submit" long type="primary">登 录</a-button>
        </a-form-item>
      </a-form>
    </a-spin>
  </div>
</template>
<script setup lang="ts">
import {reactive} from "vue";

const form = reactive({
  mobile: '',
  password: '',
  isRead: false,
})
</script>
