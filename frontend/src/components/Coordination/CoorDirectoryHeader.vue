<template>
<header class="absolute left-20 top-0 right-0 z-10 bg-[#EACEF] px-10 py-3 flex flex-col gap-2" style="width:calc(100vw-5rem);">
    <div class="flex items-center justify-between w-full">
        <div class="flex items-center space-x-3">
                <i class="pi pi-address-book text-[#073276]" style="font-size: 1.5em;"></i>
                <span class="text-3xl font-bold text-[#1B1B1B]">Stakeholder Directory</span>
        </div>
        <div class="flex-1 flex justify-center">
            <div class="relative w-80">
                <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input type="text" placeholder="Search" class="w-full border border-gray-300 rounded-full pl-10 pr-4 py-1 focus:outline-none focus:ring"/>
            </div>
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
    <div class="flex items-center justify-between w-full mt-1">
        <div class="flex items-center gap-2">
            <input type="checkbox" />
            <button class="icon-btn px-1"><i class="pi pi-users text-[#073276]"></i></button>
            <button class="icon-btn px-1"><i class="pi pi-filter text-[#073276]"></i></button>
            <button class="icon-btn px-1"><i class="pi pi-download text-[#073276]"></i></button>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-600">
            <button class="border rounded px-2 py-0.5">All <i class="pi pi-angle-down"></i></button>
            <span>entries per page</span>
            <span>| 1 - 3 of 3</span>
            <button class="px-1"><i class="pi pi-angle-double-left"></i></button>
            <button class="px-1"><i class="pi pi-angle-left"></i></button>
            <span class="font-bold text-[#073276]">1</span>
            <button class="px-1"><i class="pi pi-angle-right"></i></button>
            <button class="px-1"><i class="pi pi-angle-double-right"></i></button>
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