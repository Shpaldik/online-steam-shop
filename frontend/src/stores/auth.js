import { defineStore } from 'pinia'
import api from '@/services/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null
  }),
  actions: {
    async register(formData) {
      try {
        const { data } = await api.post('/register', formData)
        if (data.status === 1) {
          this.user = data.data
          this.token = data.data.token
          localStorage.setItem('token', this.token)
        }
        return data
      } catch (error) {
        console.error(error)
        return null
      }
    },

    async login(formData) {
      try {
        const { data } = await api.post('/login', formData)
        if (data.status === 1) {
          this.user = data.data
          this.token = data.data.token
          localStorage.setItem('token', this.token)
        }
        return data
      } catch (error) {
        console.error(error)
        return null
      }
    },

    setUserDate(){
      this.user = userData
      this.token = userData.token
      localStorage.setItem('token', this.token)

    },

    loadTokenFromStorage(){
      const savedToken = localStorage.getItem('token')
      if(savedToken){
        this.token = savedToken
        api.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    },
  }
})
