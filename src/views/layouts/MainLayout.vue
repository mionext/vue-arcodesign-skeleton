<template>
  <a-layout class="h-screen">
    <a-layout-sider>
      <a-menu class="h-full" show-collapse-button breakpoint="xl">
        <a-sub-menu key="0">
          <template #icon>
            <icon-user-group />
          </template>
          <template #title>Navigation 1</template>
          <a-menu-item key="0_0">Menu 1</a-menu-item>
          <a-menu-item key="0_1">Menu 2</a-menu-item>
          <a-menu-item key="0_2">Menu 3</a-menu-item>
          <a-menu-item key="0_3">Menu 4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="1">
          <template #icon>
            <icon-bug></icon-bug>
          </template>
          <template #title>Navigation 2</template>
          <a-menu-item key="1_0">Menu 1</a-menu-item>
          <a-menu-item key="1_1">Menu 2</a-menu-item>
          <a-menu-item key="1_2">Menu 3</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="2">
          <template #icon>
            <icon-bulb></icon-bulb>
          </template>
          <template #title>Navigation 3</template>
          <a-menu-item key="2_0">Menu 1</a-menu-item>
          <a-menu-item key="2_1">Menu 2</a-menu-item>
          <a-sub-menu key="2_2" title="Navigation 4">
            <a-menu-item key="2_2_0">Menu 1</a-menu-item>
            <a-menu-item key="2_2_1">Menu 2</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="h-14">Header</a-layout-header>
      <a-layout-content>
        <RouterView />
      </a-layout-content>
      <a-layout-footer class="h-10">Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts"></script>
