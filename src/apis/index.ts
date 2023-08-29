import http from '@/utils/http'

export const captcha = (width: number = 60, height: number = 28) =>
  http.get('/captcha', { params: { width, height } })
