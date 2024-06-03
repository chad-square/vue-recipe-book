<script setup lang="ts">
import {ref} from "vue";

const instructions = defineModel<string[]>()
const instructionInput = ref('')
let instructionEditId = ref<number | undefined>(undefined);

const onAddInstruction = function () {

  if (instructionInput.value.length) {

    if (instructionEditId.value != undefined) {
      instructions.value![instructionEditId.value] = instructionInput.value;
      instructionEditId.value = undefined;
    } else {
      instructions.value?.push(instructionInput.value);
    }

    clearInput();
  }
}

const onInstructionDelete = function(instruction: string) {
  instructions.value = instructions.value?.filter(listedInstruction => listedInstruction != instruction);
  clearInput();
}

const onInstructionEdit = function(instruction: string, index: number) {

  instructionEditId.value = index
  instructionInput.value = instruction;
}

const clearInput = function() {
  instructionInput.value = '';
  instructionEditId.value = undefined;
}

</script>

<template>
  <div class="form-control instructions-control">

    <ul class="recipe-input-list instruction-list">
      <li v-for="(instruction,  index) in instructions" :key="index">
        <p>
          <span class="instruction-text">{{ instruction }}</span>
          <span class="update-del-container">
            <span @click="onInstructionDelete(instruction)" class="delete-btn"><i class="pi pi-trash"></i></span>
            <span class="separator"><i class="pi pi-minus" style="font-size: 1.5rem"></i></span>
            <span @click="onInstructionEdit(instruction, index)" class="edit-btn"><i class="pi pi-file-edit"></i></span>
          </span>
        </p>

      </li>
    </ul>



    <div class="inputs-container">
      <Textarea placeholder="Add Instruction..." v-model="instructionInput"/>
      <Button v-if="!instructionEditId" @click="onAddInstruction" class="pi pi-plus"></Button>
      <Button v-if="instructionEditId" @click="onAddInstruction" class="pi pi-save"></Button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "../../../shared/form/recipe-form";

.inputs-container {

}

.instruction-list {
  padding: 10px;
  height: 20vh;
  overflow-y: auto;
  border-radius: 5px;
  width: 100%;
  list-style: none;

  -webkit-box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);
  -moz-box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);
  box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);

  li {
    margin: 5px;

    p {
      text-wrap: nowrap;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .instruction-text {
        display: inline-block;
        width: 50vw;
        text-overflow: ellipsis;
        overflow-x: hidden;
      }

      .update-del-container {
        display: flex;
        flex-direction: row;
        gap: 5px;
        margin-left: 5px;


        .separator {
          transform: rotate(90deg);
        }
      }
    }

  }
}

/* for larger than mobile */
@media (min-width: 450px) {
  .recipe-input-list {
    width: 32vw;

    li {

    }
  }

  .instruction-list {

    li {

      p {
        padding: 5px;

        .edit-btn, .delete-btn {
          &:hover {
            cursor: pointer;
            background-color: var(--orange-100);
            border-radius: var(--border-radius)
          }
        }


      }


    }
  }
}

</style>
