<template>
      <div class="flex h-screen text-2xl">
    
    <SideNavBar />
    <div class="flex-1 flex flex-col w-full">
      <Header />
    </div>
  </div>
</template>
<script lang="ts" setup>
import SideNavBar from '../components/HomePage/SideNavBar.vue';
import Header from '../components/Coordination/Header.vue';
</script>