<template>
  <main>
    <component :is="layout" />
  </main>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import MainLayout from '@/views/layouts/MainLayout.vue'
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import {useSessionState} from "@/stores/session";

const sessionState = useSessionState()
const layout = computed(() => (sessionState.ready ? MainLayout : AuthLayout))
</script>
