<script setup lang="ts">

import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";
import type {SignupDetails} from "@/models/signupDetails";

const formData = ref({
  firstname: {
    error: '',
    value: 'Chad'
  },
  lastname: {
    error: '',
    value: 'Square'
  },
  username: {
    error: '',
    value: 'chad'
  },
  email: {
    error: '',
    value: 'chadajsquare@gmail.com'
  },
  password: {
    error: '',
    value: 'test123'
  },
  isValid: true,
})


function requiredValidation() {

  for (let formControlName in formData.value) {

    if (!formData.value[formControlName].value.length) {
      console.log(formControlName)
      console.log(formData.value[formControlName].value.length);
      formData.value[formControlName].error = `${formControlName} is a required field`
      formData.value.isValid = false
    }
  }
  // if (!formData.value.firstname.value.length) {
  //   formData.value.firstname.error = 'Firstname is required'
  //   return
  // }
  //
  // if (!formData.value.lastname.value.length) {
  //   formData.value.lastname.error = 'Lastname is required'
  //   return
  // }
  //
  // if (!formData.value.username.value.length) {
  //   formData.value.username.error = 'Username is required'
  //   return
  // }
  //
  // if (!formData.value.email.value.length) {
  //   formData.value.email.error = 'Email is required'
  //   return
  // }
  //
  // if (!formData.value.password.value.length) {
  //   formData.value.password.error = 'Password is required'
  //   return
  // }
}

const onSignup = async function() {

  //TODO: sign-in validation


  requiredValidation();

  const details: SignupDetails = {
    firstname: formData.value.firstname.value,
    lastname: formData.value.lastname.value,
    username: formData.value.username.value,
    email: formData.value.email.value,
    password: formData.value.password.value,
  };

  // try {
  //    await useAuthStore().signup(details);
  //
  // } catch (error) {
  //   console.warn(error)
  // }
}


</script>

<template>

  <h1>New User Sign-up</h1>


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
      <p class="control-error">some kinda eerror</p>
    </div>
  </div>

  <Button @click="onSignup">Signup</Button>

</template>

<style lang="scss" scoped>


.control-error {
  color: var(--highlight-text-color);
  margin: 0 0 0 0;
  opacity: 0
}


</style>
