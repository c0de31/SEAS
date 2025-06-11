<template>
  <header class="fixed left-20 top-0 right-0 z-10 bg-[#eaecef] px-10 py-1 mb-1.5 flex items-center justify-between" style="width:calc(100vw-5rem);">
    <div class="flex items-center space-x-4  mb-0.75 ">
      <i class="pi pi-gauge" style="font-size: 1.5em;"></i>
      <div>
        <span class="text-3xl font-bold text-[#1B1B1B] leading-tight">Dashboard</span>
        <div class="text-sm text-gray-600 mt-1 font-medium">
          Monitoring as of {{ currentDateTime }}
        </div>
      </div>
    </div>
    <div class="flex space-x-10 text-[#073276]" >
      <Select
        :options="accounts"
        v-model="selectedAccount"
        optionLabel="label"
        class="w-full"
        placeholder="Accounts"
        />
      <Select
        :options="regions"
        v-model="selectedRegion"
        optionLabel="label"
        class="w-full"
        placeholder="Region"
      />
      <Select
        :options="provinces"
        v-model="selectedProvince"
        optionLabel="label"
        class="w-full "
        placeholder="Province"
      />
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
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Select from 'primevue/select'
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

const accounts = ref([
  { label: 'Regional Accounts of the Philippines' },
  { label: 'Provincial Product Accounts' }
])

const regions = ref([
  { label: 'National Capital Region' },
  { label: 'Cordillera Administrative Region' },
  { label: 'Ilocos Region' },
  { label: 'Cagayan Valley' },
  { label: 'Central Luzon' },
  { label: 'CALABARZON' },
  { label: 'MIMAROPA Region' },
  { label: 'Bicol Region' },
  { label: 'Western Visayas' },
  { label: 'Negros Island Region' },
  { label: 'Eastern Visayas' }
])

const provinces = ref([
  { label: 'Summary' },
  { label: 'Province 1' },
  { label: 'Province 2' },
  { label: 'Province 3' },
  { label: 'HUC 1' },
  { label: 'HUC 2' }
])

const selectedAccount = ref(null)
const selectedRegion = ref(null)
const selectedProvince = ref(null)
</script>

<style scoped>

</style>