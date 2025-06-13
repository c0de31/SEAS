<template>
     <div class="flex h-screen text-2xl">
    <SideNavBar />
    <div class="flex-1 flex flex-col w-full">
      <UtilHeader />
    </div>
  </div>
</template>
<script setup lang="ts">
import SideNavBar from '../components/HomePage/SideNavBar.vue';
import UtilHeader from '../components/Utility/UtilHeader.vue';
</script>