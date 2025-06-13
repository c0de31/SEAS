<template>
     
  <div class="flex h-screen text-2xl">
    
    <SideNavBar />
    <div class="flex-1 flex flex-col w-full">
      <CompiHeader />
    </div>
  </div>
</template>
<script lang="ts" setup>
import CompiHeader from '../components/Compilation/CompiHeader.vue';
import SideNavBar from '../components/HomePage/SideNavBar.vue';
</script>