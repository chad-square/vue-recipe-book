<script setup lang="ts">

import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";
import type {SignInDetails} from "@/models/SignInDetails";
import router from "@/router";

const formData = ref({
  email: {
    error: 'chadajsquare@gmail.com',
    value: 'chad@mail.com'
  },
  password: {
    error: '',
    value: 'test123'
  },
})

const onSignIn = async function() {

  //TODO: sign-in validation

  const details: SignInDetails = {
    email: formData.value.email.value,
    password: formData.value.password.value,
  };

  try {
    await useAuthStore().signIn(details);
    await router.push('/book')

  } catch (error) {
    console.warn(error)
  }
}


</script>

<template>

  <h1>Sign in</h1>
  <div class="card flex flex-column md:flex-row gap-3" @submit.prevent>

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

    <Button @click="onSignIn">Signin</Button>
  </div>

</template>

<style scoped>

</style>
