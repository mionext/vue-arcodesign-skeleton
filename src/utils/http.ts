import axios from 'axios'
import {Cache} from '@/utils/cache'
import {TOKEN} from '@/types/consts'
import {v4 as uuidV4} from 'uuid'

const buildVersion = import.meta.env.VITE_BUILD_VERSION || 'dev-main'
const http = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_DOMAIN
})

http.interceptors.request.use((cfg) => {
  const jwt = Cache.get(TOKEN)
  jwt && (cfg.headers.Authorization = `Bearer ${jwt}`)

  cfg.headers.set('X-Request-Id', uuidV4())
  cfg.headers.set('X-Build', buildVersion)

  return cfg
})

http.interceptors.response.use((response) => {
  return Promise.resolve(response.data)
}, error => {
  if (error.response.data.msg || null) {
    error = new Error(error.response.data.msg)
  }

  return Promise.reject(error)
})

export default http
