import axios from 'axios'
import { useAuthStore } from "@/stores/auth"; 


const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', 
  withCredentials: true 
})


api.interceptors.request.use(config => {
  const authStore = useAuthStore()
  const token = authStore.token || localStorage.getItem('token') 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
