import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'
import {vAutofocus} from './directives/vAutofocus'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.directive('autofocus', vAutofocus)
app.mount('#app')
