<template>
    
  <div class="flex h-screen text-2xl">
    
    <SideNavBar />
    <div class="flex-1 flex flex-col w-full">
      <Header />
    </div>
  </div>
</template>

<script>
import Header from '../components/HomePage/Header.vue';
import SideNavBar from '../components/HomePage/SideNavBar.vue';
export default {
    name: 'HomePage',
    components: {
        Header,
        SideNavBar
    }
};
</script>