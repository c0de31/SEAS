<template>
  <SideNavBar />
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import SideNavBar from '../components/HomePage/SideNavBar.vue';
</script>