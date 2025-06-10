import { defineConfig } from 'vite'
import {PrimeVueResolver} from '@primevue/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      resolvers: [
        PrimeVueResolver(),
      ],
    }),
  ],
});
