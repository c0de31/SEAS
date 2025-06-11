<template>
    
  <div class="flex h-screen text-2xl">
    
    <SideNavBar />
    <div class="flex-1 flex flex-col w-full">
      <HomeHeader />
    </div>
  </div>
</template>

<script>
import HomeHeader from '../components/HomePage/HomeHeader.vue';
import SideNavBar from '../components/HomePage/SideNavBar.vue';
export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        SideNavBar
    }
};
</script>