<template>
  <div class="flex min-h-screen">
    <SideNavBar />
    <div class="flex-1 flex flex-col w-full">
      <HomeHeader /> 
      <!-- Main Content -->
      <div class="flex flex-row justify-center items-start w-300 mt-10 px-6 gap-10">
        <div class="w-full max-w-7xl grid grid-cols-2 gap-6">
          <!-- Left Column -->
          <div class="col-span-1 mt-14 ">
            <AboutSeas />
          </div>
          <!-- Middle Column -->
          <div class="col-span-1 flex flex-col gap-6 mt-14 ">
            <HomeCalendar />
          </div>
          <div class="col-span-2 flex flex-col min-h-[449px] ">
            <TotalDataCollected />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from '../components/HomePage/HomeHeader.vue';
import SideNavBar from '../components/HomePage/SideNavBar.vue';
import AboutSeas from '../components/HomePage/AboutSeas.vue';
import HomeCalendar from '../components/HomePage/HomeCalendar.vue';
import TotalDataCollected from '../components/HomePage/TotalDataCollected.vue';
import DataIndicators from '../components/HomePage/DataIndicators.vue';

export default {
    name: 'HomePage',
    components: {
        SideNavBar,
        HomeHeader,
        AboutSeas,
        HomeCalendar,
        TotalDataCollected,
        DataIndicators
    }
};
</script>