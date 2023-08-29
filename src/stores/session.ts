import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import { type model } from '@/types/account'

export const useSessionState = defineStore('session', () => {
  const ready = computed(() => profile.value && (profile.value?.id || 0) > 0)
  const profile: Ref<model.Account> = ref({})
  const isLogin: Ref<boolean> = ref(false)
  const permissions: Ref<string[]> = ref([])
  const can = (...items: string[]): boolean =>
    items.filter((v) => permissions.value.includes(v)).length > 0
  const reset = () => {
    permissions.value = []
    profile.value = {}
    isLogin.value = false
  }

  return { permissions, reset, can, isLogin, ready, profile }
})
