<template>
  <header class="absolute left-20 top-0 right-0 z-10 bg-gradient-to-r from-gray-100 to-gray-200 px-10 py-1 mb-1.5 flex items-center justify-between" style="width:calc(100vw-5rem);">
    <div class="flex items-center space-x-4  mb-0.75 ">
      <div>
        <span class="text-4xl font-extrabold text-[#1B1B1B] leading-tight">Coordination</span>
        <div class="text-sm text-gray-600 mt-1 font-medium">
          Monitoring as of {{ currentDateTime }}
        </div>
      </div>
    </div>  

    <div class="flex items-center space-x-3">
      <div class="flex flex-col items-end">
        <span class="text-2xl font-extrabold text-[#073276]">John Doe</span>
        <div class="text-xs text-gray-600 mt-1">
          Compilation for year {{ currentYear }}
        </div>
      </div>
      <i class="pi pi-user text-3xl text-[#073276] ml-2"></i>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const currentDateTime = ref('')

function updateDateTime() {
  const now = new Date()

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const mmm = months[now.getMonth()]
  const dd = String(now.getDate()).padStart(2, '0')
  const yyyy = now.getFullYear()
  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  const ss = String(now.getSeconds()).padStart(2, '0')
  currentDateTime.value = `${mmm}-${dd}-${yyyy} | ${hh}:${mm}:${ss}`
}

let intervalId: number | undefined
onMounted(() => {
  updateDateTime()
  intervalId = window.setInterval(updateDateTime, 1000)
})
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const currentYear = ref(new Date().getFullYear())


</script>

<style scoped>

</style>