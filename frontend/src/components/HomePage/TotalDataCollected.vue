<template>
  <div class="bg-white rounded-lg shadow p-6 flex flex-col gap-4 h-full w-full">
    <h2 class="text-xl font-bold mb-2">Total Data Collected</h2>
    <div class="flex items-center gap-6">
      <!-- Horizontal Bar -->
      <div class="flex flex-col items-center w-1/2">
        <div class="w-full bg-gray-200 rounded-full h-8 flex items-center">
          <div
            class="bg-yellow-400 h-8 rounded-full flex items-center justify-end pr-4"
            :style="{ width: lguPercent + '%' }"
          >
            <span class="text-2xl font-bold text-gray-900">{{ lguPercent }}%</span>
          </div>
        </div>
        <div class="mt-2 text-lg text-gray-700">
          {{ collected }}/{{ total }} # of indicators
        </div>
      </div>
      <!-- Circular Progress -->
      <div class="flex gap-8 w-1/2 justify-center">
        <div class="flex flex-col items-center">
          <svg width="80" height="80">
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke="#FACC15"
              stroke-width="8"
              fill="none"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference - (lguPercent / 100) * circumference"
              stroke-linecap="round"
            />
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke="#E5E7EB"
              stroke-width="8"
              fill="none"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="0"
            />
            <text
              x="40"
              y="48"
              text-anchor="middle"
              font-size="22"
              fill="#1B1B1B"
              font-weight="bold"
            >
              {{ lguPercent }}%
            </text>
          </svg>
          <div class="mt-1 text-base">LGU Data</div>
        </div>
        <div class="flex flex-col items-center">
          <svg width="80" height="80">
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke="#34D399"
              stroke-width="8"
              fill="none"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference - (adminPercent / 100) * circumference"
              stroke-linecap="round"
            />
            <circle
              cx="40"
              cy="40"
              r="34"
              stroke="#E5E7EB"
              stroke-width="8"
              fill="none"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="0"
            />
            <text
              x="40"
              y="48"
              text-anchor="middle"
              font-size="22"
              fill="#1B1B1B"
              font-weight="bold"
            >
              {{ adminPercent }}%
            </text>
          </svg>
          <div class="mt-1 text-base">Other Admin Data</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// Example static data; replace with props or real data as needed
const lguPercent = 70
const adminPercent = 100
const collected = 21
const total = 30

const circumference = 2 * Math.PI * 34
</script>