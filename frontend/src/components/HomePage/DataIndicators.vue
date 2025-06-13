<template>
  <div class="bg-white rounded-lg shadow p-6 h-75% flex flex-col">
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-xl font-bold">Data Indicators Collected</h2>
      <div class="flex gap-2">
        <button class="icon-btn"><i class="pi pi-filter"></i></button>
        <button class="icon-btn"><i class="pi pi-sort-alt"></i></button>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto">
      <div
        v-for="indicator in indicators"
        :key="indicator.id"
        class="flex items-center justify-between border-b py-2 last:border-b-0"
      >
        <div>
          <div class="font-semibold">{{ indicator.title }}</div>
          <div class="text-xs text-gray-500">{{ indicator.date }}</div>
          <div class="text-xs text-gray-500">Status: {{ indicator.status }}</div>
        </div>
        <div class="flex gap-2">
          <button class="icon-btn"><i class="pi pi-comments"></i></button>
          <button class="icon-btn"><i class="pi pi-external-link"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const indicators = [
  {
    id: 1,
    title: 'Annex 1: Revenue by Establishment - Batangas',
    date: '03/03/2025',
    status: '1/15 municipalities'
  },
  {
    id: 2,
    title: 'Annex 1: Revenue by Establishment - Laguna',
    date: '01/03/2025',
    status: '3/20 municipalities'
  },
  {
    id: 3,
    title: 'Annex 1: Revenue by Establishment - Cavite',
    date: '01/03/2025',
    status: '3/20 municipalities'
  },
  {
    id: 4,
    title: 'Department of Trade and Industry',
    date: '01/02/2025',
    status: ''
  },
  {
    id: 5,
    title: 'Land Transportation Franchising and Regulatory Board (LTFRB)',
    date: '01/02/2025',
    status: ''
  },
  {
    id: 6,
    title: 'Department of Tourism (DOT)',
    date: '01/02/2025',
    status: ''
  },
  {
    id: 7,
    title: 'National Telecommunications Commission (NTC)',
    date: '01/02/2025',
    status: ''
  },
  {
    id: 8,
    title: 'Land Transportation Office (LTO)',
    date: '01/02/2025',
    status: ''
  },
  {
    id: 9,
    title: 'Bangko Sentral ng Pilipinas (BSP)',
    date: '01/02/2025',
    status: ''
  },
  {
    id: 10,
    title: 'Land Registration Authority (LRA)',
    date: '01/02/2025',
    status: ''
  },
  {
    id: 11,
    title: 'Provincial Environment and Natural Resources Office (PENRO)',
    date: '01/02/2025',
    status: ''
  }
]
</script>

<style scoped>
.icon-btn {
  background: transparent;
  border: none;
  padding: 0.25rem;
  border-radius: 50%;
  transition: background 0.2s;
}
.icon-btn:hover {
  background: #f0f4fa;
}
</style>