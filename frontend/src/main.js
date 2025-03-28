import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import AdminPanel from './components/AdminPanel.vue'


const routes = [
    { path: '/home', name: 'home', component: Home},
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path:'/adminpanel', name:'AdminPanel', component: AdminPanel},
    { path: '/', redirect: '/home' }, 
]

const app = createApp(App)


const pinia = createPinia()
app.use(pinia) 


const router = createRouter({
    history: createWebHistory(),
    routes,
})
app.use(router) 


import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()
authStore.loadTokenFromStorage()

app.mount('#app')

