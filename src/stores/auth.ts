import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {AuthCredential} from "@/models/AuthCredential";
import type {SignupDetails} from "@/models/signupDetails";
import type {SignInDetails} from "@/models/SignInDetails";
import {appName} from "@/data";

const localAuthKey = `${appName}-authCred`

export const useAuthStore = defineStore('auth', () => {
    const auth = ref<{authCred: AuthCredential}>()

    // const doubleCount = computed(() => count.value * 2)

    function signup(signupDetails: SignupDetails) {
        // count.value++

        console.log(signupDetails);
        console.log(auth.value?.authCred);
    }

    function signIn(signInDetails: SignInDetails) {
        console.log(signInDetails);
        console.log(auth.value?.authCred);
        localStorage.setItem(localAuthKey, JSON.stringify(auth))
    }

    function signOut() {
        localStorage.removeItem(localAuthKey)
        console.log(auth.value = undefined);
    }



    return { auth, signup, signIn, signOut }
})
