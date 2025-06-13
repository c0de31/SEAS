<template>
   
  <div class="flex h-screen text-2xl">
    
    <SideNavBar />
    <div class="flex-1 flex flex-col w-full">
      <CollecHeader />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CollecHeader from '../components/Collection/CollecHeader.vue';
import SideNavBar from '../components/HomePage/SideNavBar.vue';
</script>