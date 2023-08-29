import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useSessionState } from '@/stores/session'
import { Cache } from '@/utils/cache'
import { TOKEN } from '@/types/consts'
import LoginView from '@/views/auth/LoginView.vue'

const siteName = import.meta.env.VITE_APP_NAME || 'Vite App'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth/login',
    name: 'Login',
    meta: {
      title: '系统登录'
    },
    components: {
      auth: LoginView
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  document.title = `${siteName} · ${to.meta?.title}`
  const sessionState = useSessionState()
  if (!sessionState.ready) {
    if (!Cache.get(TOKEN) && !to.path.startsWith('/auth/login')) {
      return '/auth/login?t=' + from.path
    }
  }
})

export default router
