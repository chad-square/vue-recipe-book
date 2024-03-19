<script setup lang="ts">

import {ref} from "vue";

const formData = ref({
  firstname: {
    error: '',
    value: ''
  },
  lastname: {
    error: '',
    value: ''
  },
  username: {
    error: '',
    value: ''
  },
  email: {
    error: '',
    value: ''
  },
  password: {
    error: '',
    value: ''
  },
})

</script>

<template>

  <h1>SIgn up COmp</h1>


  <div class="card flex flex-column md:flex-row gap-3" @submit.prevent>
    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Firstname" v-model="formData.firstname.value"/>
      </InputGroup>
      <p class="control-error">some inda eerror</p>
    </div>


    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Lastname" v-model="formData.lastname.value"/>
      </InputGroup>
      <p class="control-error">some inda eerror</p>
    </div>

    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="username" v-model="formData.username.value"/>
      </InputGroup>
      <p class="control-error">some inda eerror</p>
    </div>

    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </InputGroupAddon>
        <InputText placeholder="Email" required v-model="formData.email.value"/>
      </InputGroup>
      <p class="control-error">some inda eerror</p>
    </div>

    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-lock"></i>
        </InputGroupAddon>
        <InputText placeholder="Password" type="password" required v-model="formData.password.value"/>
        <InputGroupAddon>
          <i class="pi pi-eye-slash"></i>
        </InputGroupAddon>
      </InputGroup>
      <p class="control-error">some inda eerror</p>
    </div>
  </div>

</template>

<style lang="scss" scoped>


.control-error {
  color: var(--highlight-text-color);
  margin: 0 0 0 0;
  opacity: 0
}


</style>
