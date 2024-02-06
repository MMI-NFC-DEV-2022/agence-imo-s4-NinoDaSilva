import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory()
  })
)

app.use(plugin, defaultConfig)

app.mount('#app')
