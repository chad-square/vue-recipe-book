<script setup lang="ts">

import {ref} from "vue";
import type {SignupDetails} from "@/models/signupDetails";
import {emailValidation, passwordValidation, requiredValidation} from "@/shared/form/formValidations";
import {useAuthStore} from "@/stores/auth";
import InputText from "primevue/inputtext";
import router from "@/router";

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
  isValid: true,
})

const onSignup = async function() {

  requiredValidation(formData.value)
  emailValidation(formData.value)
  passwordValidation(formData.value)

  if (!formData.value.isValid) {
    return
  }

  console.log('passed all validation')


  const details: SignupDetails = {
    firstname: formData.value.firstname.value,
    lastname: formData.value.lastname.value,
    username: formData.value.username.value,
    email: formData.value.email.value,
    password: formData.value.password.value,
  };

  try {
     await useAuthStore().signup(details);

    console.log('successful signup')
    await router.push('/sign-in')

  } catch (error) {
    console.warn(error)
  }
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
      <p :class="{showError: formData.firstname.error.length > 0}" class="control-error">{{formData.firstname.error}}</p>
    </div>


    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Lastname" v-model="formData.lastname.value"/>
      </InputGroup>
      <p :class="{showError: formData.lastname.error.length > 0}" class="control-error">{{formData.lastname.error}}</p>
    </div>

    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="username" v-model="formData.username.value"/>
      </InputGroup>
      <p :class="{showError: formData.username.error.length > 0}" class="control-error">{{formData.username.error}}</p>
    </div>

    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </InputGroupAddon>
        <InputText placeholder="Email" required v-model="formData.email.value"/>
      </InputGroup>
      <p :class="{showError: formData.email.error.length > 0}" class="control-error">{{formData.email.error}}</p>
    </div>

    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-lock"></i>
        </InputGroupAddon>
        <Password v-model="formData.password.value" toggleMask />
      </InputGroup>
      <p :class="{showError: formData.password.error.length > 0}" class="control-error">{{formData.password.error}}</p>
    </div>
  </div>

  <Button @click="onSignup">Signup</Button>

</template>

<style lang="scss" scoped>
@import "../../shared/form/recipe-form";



</style>
