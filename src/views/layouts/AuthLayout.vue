<template>
  <a-layout class="h-screen">
    <a-layout-sider class="sidebar !p-3 md:!w-80 !bg-gray-800">
      <img src="../../assets/logo.svg" class="cursor-pointer m-3" />
    </a-layout-sider>
    <a-layout class="main bg-gray-100">
      <a-layout-content class="p-3">
        <RouterView name="auth" />
      </a-layout-content>
      <a-layout-footer class="p-3 flex content-center justify-center h-14">
        <a-link
          target="_blank"
          href="https://dev.m-io.cn/contact?ref=sp.100"
          :hoverable="false"
          class="!text-gray-300 !font-light !text-xs"
        >
          © {{ new Date().getFullYear() }} MIO.
        </a-link>
        <span class="!text-gray-300 !font-light !text-xs"> · Build: 0.0.98.266</span>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts"></script>

<style lang="css">
.sidebar {
  background-image: url('../../assets/lines-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

.main {
  background-image: url('../../assets/bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
