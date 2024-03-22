<script setup lang="ts">
import {ref} from "vue";
import {requiredValidation} from "@/shared/form/formValidations";

const instructions = defineModel<string[]>()
const instructionInput = ref('')

const onAddInstruction = function () {
  if (instructionInput.value.length) {
    instructions.value?.unshift(instructionInput.value)
    instructionInput.value = '';
  }
}

</script>

<template>
  <div class="form-control instructions-control">
    <div class="inputs-container">
      <Textarea placeholder="Add Instruction..." v-model="instructionInput"/>
      <Button @click="onAddInstruction" class="pi pi-plus"></Button>
    </div>
    <ul class="recipe-input-list">
      <li v-for="(instruction,  index) in instructions" :key="index">
        {{ instruction }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../shared/form/recipe-form";

.inputs-container {

}

</style>
