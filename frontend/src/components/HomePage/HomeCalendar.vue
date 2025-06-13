<template>
  <div class="bg-white rounded-lg shadow p-6 mb-6 w-full h-full ">
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-lg font-bold">Calendar</h2>
      <div class="flex items-center gap-2">
        <span class="font-semibold">{{ monthNames[currentMonth] }}</span>
        <button @click="prevMonth" class="icon-btn"><i class="pi pi-angle-left"></i></button>
        <button @click="nextMonth" class="icon-btn"><i class="pi pi-angle-right"></i></button>
      </div>
    </div>
    <div class="grid grid-cols-7 gap-1 text-center text-sm font-semibold text-gray-600 mb-3" style="text-align: left;">
      <span v-for="d in days" :key="d">{{ d }}</span>
    </div>
    <div class="grid grid-cols-7 gap-1 text-center ">
      <span v-for="n in firstDayOfMonth" :key="'empty-' + n"></span>
        <span
        v-for="day in daysInMonth"
        :key="day"
        class="rounded-full w-8 h-8 flex items-center justify-center"
        :class="[
            'hover:bg-blue-100 cursor-pointer',
            isWeekend(day) ? 'bg-blue-100 text-black font-semibold' : '',
        ]"
        >
        {{ day }}
        </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const now = new Date()
const currentMonth = ref(now.getMonth())
const currentYear = ref(now.getFullYear())

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

// Example: highlight some dates


const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}
function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

function isWeekend(day: number) {
  const date = new Date(currentYear.value, currentMonth.value, day)
  const dayOfWeek = date.getDay()
  return dayOfWeek === 0 || dayOfWeek === 6 // Sunday or Saturday
}
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