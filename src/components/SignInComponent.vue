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

  <h1>Sign in Comp</h1>
  <div class="card flex flex-column md:flex-row gap-3" @submit.prevent>
    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-user"></i>
      </InputGroupAddon>
      <InputText placeholder="Firstname" v-model="formData.firstname.value" />
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-user"></i>
      </InputGroupAddon>
      <InputText placeholder="Lastname" v-model="formData.lastname.value" />
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-user"></i>
      </InputGroupAddon>
      <InputText placeholder="username" v-model="formData.username.value" />
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-envelope"></i>
      </InputGroupAddon>
      <InputText placeholder="Email" required v-model="formData.email.value" />
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-lock"></i>
      </InputGroupAddon>
      <InputText placeholder="Password" type="password" required v-model="formData.password.value" />
      <InputGroupAddon>
        <i class="pi pi-eye-slash"></i>
      </InputGroupAddon>
    </InputGroup>
  </div>

</template>

<style scoped>

</style>
