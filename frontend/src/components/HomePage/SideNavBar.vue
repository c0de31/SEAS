<template>
  <aside class="h-screen w-20 bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col justify-between items-center py-4 ">

    <div class="mb-4 flex flex-col items-center">
      <img src="/vite.svg" alt="Logo" class="w-8 h-8 mb-2" />
    </div>
    <nav class="flex-1 w-full flex flex-col items-center mt-2">
      <ul class="flex flex-col gap-2 w-full">
        <li v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.route"
            class="group flex flex-col items-center justify-center py-2 w-full transition-all relative"
            :class="isActiveRoute(item.route) ? 'bg-gray-300  text-black shadow' : 'text-gray-700 hover:bg-gray-300'"
          >
            <i :class="item.icon + ' pi text-2xl mb-1'" />
            <span class="text-xs font-medium">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="mb-2 w-full flex flex-col items-center">
      <router-link to="/help" class="flex flex-col items-center py-2 w-full text-gray-700 hover:bg-gray-300">
        <i class="pi pi-question-circle text-2xl mb-1" />
        <span class="text-xs font-medium">Help</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const navItems = [
  {
    name: 'HomePage',
    label: 'Home',
    route: '/',
    icon: 'pi pi-home',
  },
  {
    name: 'Coordination',
    label: 'Coordination',
    route: '/coordination',
    icon: 'pi pi-users',
  },
  {
    name: 'Collection',
    label: 'Collection',
    route: '/collection',
    icon: 'pi pi-upload',
  },
  {
    name: 'Compilation',
    label: 'Compilation',
    route: '/compilation',
    icon: 'pi pi-sitemap',
  },
   {
    name: 'Processing',
    label: 'Processing',
    route: '/processing',
    icon: 'pi pi-sliders-h',
  },
  {
    name: 'Utilities',
    label: 'Utilities',
    route: '/utilities',
    icon: 'pi pi-cog',
  },
]

function isActiveRoute(path: string) {
  return route.path === path
}
</script>

<style scoped>
.pi {
  font-size: 1.5rem;
}
</style>