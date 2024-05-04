<script setup lang="ts">
import {ref} from "vue";

const instructions = defineModel<string[]>()
const instructionInput = ref('')

const onAddInstruction = function () {
  if (instructionInput.value.length) {
    instructions.value?.push(instructionInput.value)
    instructionInput.value = '';
  }
}

</script>

<template>
  <div class="form-control instructions-control">

    <ul class="recipe-input-list instruction-list">
      <li v-for="(instruction,  index) in instructions" :key="index">
        {{ instruction }}
      </li>
    </ul>



    <div class="inputs-container">
      <Textarea placeholder="Add Instruction..." v-model="instructionInput"/>
      <Button @click="onAddInstruction" class="pi pi-plus"></Button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "../../../shared/form/recipe-form";

.inputs-container {

}

.instruction-list {
  padding: 30px;
  height: 20vh;
  text-align: center;
  overflow-y: auto;
  border-radius: 5px;
  width: 100%;

  -webkit-box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);
  -moz-box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);
  box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);

  li {
    margin: 5px;

  }
}

/* for larger than mobile */
@media (min-width: 450px) {
  .recipe-input-list {
    width: 32vw;
  }
}

</style>
