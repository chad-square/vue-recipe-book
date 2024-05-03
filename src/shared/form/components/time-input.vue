<script setup lang="ts">

import {ref, watchEffect} from "vue";

const time = defineModel<string>()

const timeForm = ref({
  hours: {
    value: time.value ? +time.value?.substring(0, time.value.indexOf(':')) : 0,
    error: ''
  },
  minutes: {
    value: time.value ? +time.value?.substring(time.value.indexOf(':') + 1, time.value.length) : 0,
    error: ''
  },
  isValid: true,
  value: {
    hours: 0
  }
})

console.log(time.value);

watchEffect(() => {
  time.value = `${timeForm.value.hours.value}:${timeForm.value.minutes.value}`
  console.log(time.value);
})

</script>

<template>
  <div class="time-container">
    <div class="time-control">
      <label>Hours</label>
      <InputNumber v-model="timeForm.hours.value" showButtons buttonLayout="vertical" style="width: 3rem" :min="0" :max="99">
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>
    <span class="time-separator">:</span>
    <div class="time-control">
      <label>Minutes</label>
      <InputNumber v-model="timeForm.minutes.value" showButtons buttonLayout="vertical" style="width: 3rem" :min="0" :max="59">
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>
  </div>
</template>

<style scoped lang="scss">

.time-container {
  display: flex;
  gap: 30px;

  .time-separator {
    margin: 70px auto auto auto;
  }

  .time-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}

</style>
