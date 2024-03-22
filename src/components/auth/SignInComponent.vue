<script setup lang="ts">

import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";
import type {SignInDetails} from "@/models/SignInDetails";
import {emailValidation, passwordValidation, requiredValidation} from "@/shared/form/formValidations";
import {RouterService} from "@/router/RouterService";

const router = new RouterService()
const formData = ref({
  email: {
    error: '',
    value: 'chadajsquare@gmail.com'
  },
  password: {
    error: '',
    value: 'Test123!'
  },
  isValid: true
})

const onSignIn = async function () {

  requiredValidation(formData.value)
  emailValidation(formData.value)
  passwordValidation(formData.value)

  if (!formData.value.isValid) {
    return
  }

  const details: SignInDetails = {
    email: formData.value.email.value,
    password: formData.value.password.value,
  };

  try {
    await useAuthStore().signIn(details);
    await router.navigateToRecipes()

  } catch (error) {
    console.warn(error)
  }
}


</script>

<template>

  <h1>Sign in</h1>
  <form class="card flex flex-column md:flex-row gap-3" @submit.prevent>

    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </InputGroupAddon>
        <InputText placeholder="Email" required v-model="formData.email.value"/>
      </InputGroup>
      <p :class="{showError: formData.email.error.length > 0}" class="control-error">{{ formData.email.error }}</p>
    </div>

    <div class="form-control">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-lock"></i>
        </InputGroupAddon>
        <Password placeholder="Password" v-model="formData.password.value" toggleMask/>
      </InputGroup>
      <p :class="{showError: formData.password.error.length > 0}" class="control-error">{{
          formData.password.error
        }}</p>
    </div>

    <Button @click="onSignIn">Signin</Button>
  </form>

</template>

<style lang="scss" scoped>
@import "../../shared/form/recipe-form";

</style>
