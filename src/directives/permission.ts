import { useSessionState } from '@/stores/session'

export const usePermissionDirective = (el: HTMLElement, bindings: { value: string[] }) => {
  let display = 'none'
  const sessionState = useSessionState()
  for (const permission of bindings.value || []) {
    if (sessionState.permissions.includes(permission)) {
      display = 'display'
      break
    }
  }

  el.style.display = display
}
