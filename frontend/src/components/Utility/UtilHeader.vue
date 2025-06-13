<template>
<header class="absolute left-20 top-0 right-0 z-10 bg-[#EACEF] px-10 py-4 flex flex-col gap-2" style="width:calc(100vw-5rem);">
    <div class="flex items-center justify-between w-full mt-0.5">
        <div class="flex items-center space-x-3">
                <i class="pi pi-briefcase text-[#1B1B1B]" style="font-size: 2rem;"></i>
                <span class="text-4xl font-medium text-[#1B1B1B]">Utilities</span>
        </div>
        <div class="flex items-center space-x-3">
            <div class=" text-gray-600 mt-1" style="font-size: medium;">
                    Compilation for year {{ currentYear }} |
            </div>
            <div class="flex flex-col items-end">
                <span class="text-2xl font-bold text-[#073276]">John Doe</span>
            </div>
                <i class="pi pi-user text-[#073276] ml-2" style="font-size: x-large;"></i>
        </div>
    </div>
</header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.icon-btn {
    background-color: transparent;
    transition-duration: 150ms;
}
.icon-btn:hover
{
    background: #fff;
}
.icon-btn:active
{
    background: #fff;
}
</style>