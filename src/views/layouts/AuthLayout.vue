<template>
  <a-layout class="h-screen">
    <a-layout-sider theme="dark" class="!p-3 md:!w-80 text-white"> LeftSide</a-layout-sider>
    <a-layout>
      <a-layout-content class="p-3">
        <RouterView name="auth"/>
      </a-layout-content>
      <a-layout-footer class="p-3 flex content-center justify-center h-14">
        <a-link
            target="_blank"
            href="https://dev.m-io.cn/contact?ref=sp.100"
            :hoverable="false"
            class="!text-gray-300 !font-light !text-sm"
        >
          © {{ new Date().getFullYear() }} MIO.
        </a-link>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import {onBeforeMount} from "vue";

onBeforeMount(() => {
  console.log('sss')
})
</script>
