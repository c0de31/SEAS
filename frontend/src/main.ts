import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router/index'
import 'primeicons/primeicons.css'
import Select from 'primevue/select';
import Aura from '@primeuix/themes/aura';


const app = createApp(App)
app.use(PrimeVue,{
    theme:{
        preset: Aura
    }
})
app.use(router)
app.component('Select', Select)

app.mount('#app')