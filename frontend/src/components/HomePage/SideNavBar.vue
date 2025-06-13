<template>
  <!--w-auto rounded-2xl p-5 bg-surface-50 dark:bg-surface-900 h-full flex flex-col justify-between --> 
  <aside class="h-full w-20 flex flex-col justify-between items-center py-5 ">

    <div class="mb-2 flex flex-col items-center">
      <img src="/vite.svg" alt="Logo" class="w-8 h-8 mb-2" />
    </div>
    <nav class="flex-1 w-full flex flex-col items-center mt-2">
      <ul class="flex flex-col gap-2 w-full">
        <li v-for="item in navItems" :key="item.name">
          <div
            v-if="item.name === 'Coordination'"
            @click="toggleCoordination"
            class="group flex flex-col items-center justify-center py-2 w-full transition-all relative cursor-pointer"
            :class="coordinationOpen ? 'bg-gray-300 text-[#073276] shadow' : 'text-gray-700 hover:bg-gray-300'"
          >
            <i :class="item.icon + ' pi text-2xl mb-1'" />
            <span class="text-xs font-medium">{{ item.label }}</span>
          </div>
          <router-link
            v-else
            :to="item.route"
            class="group flex flex-col items-center justify-center py-2 w-full transition-all relative"
            :class="isActiveRoute(item.route) ? 'bg-gray-300  text-black shadow' : 'text-gray-700 hover:bg-gray-300'"
          >
            <i :class="item.icon + ' pi text-2xl mb-1'" />
            <span class="text-xs font-medium">{{ item.label }}</span>
          </router-link>
          <ul
            v-if="item.name === 'Coordination' && coordinationOpen"
            class="flex flex-col items-center gap-2 w-full"
          >
            <li v-for="subItem in item.subItems" :key="subItem.label" class="w-full flex justify-center">
              <router-link
                :to="subItem.to"
                class="group flex flex-col items-center justify-center py-2 w-4/5 transition-all relative rounded"
                :class="isActiveRoute(subItem.to) ? 'bg-gray-300 text-black shadow' : 'text-blue-700 hover:bg-gray-300'"
              >
                <i :class="item.icon + ' pi text-xl mb-1'" />
                <span class="text-xs font-medium text-center">{{ subItem.label }}</span>
              </router-link>
            </li>
          </ul>
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
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const coordinationOpen = ref(false)
function toggleCoordination() {
  coordinationOpen.value = !coordinationOpen.value
}
function isActiveRoute(path: string) {
  return route.path === path
}
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
    subItems: [
      {
        label: 'Stockholder Directory',
        to: '/coordination/stockholder-directory',
      },
      {
        label: 'Activities',
        to: '/coordination/activities',
      },
    ],
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
</script>

<style scoped>
.pi {
  font-size: 1.5rem;
}
</style>