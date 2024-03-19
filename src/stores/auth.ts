import {defineStore} from "pinia";
import {ref} from "vue";
import type {AuthCredential} from "@/models/AuthCredential";
import type {SignupDetails} from "@/models/signupDetails";
import type {SignInDetails} from "@/models/SignInDetails";
import {appName} from "@/data";
import {supabase} from "@/lib/subaseClient";

const localAuthKey = `${appName}-authCred`

export const useAuthStore = defineStore('auth', () => {
    const auth = ref<{ authCred: AuthCredential }>()

    // const doubleCount = computed(() => count.value * 2)

    async function signup(signupDetails: SignupDetails) {
        // count.value++

        const {data, error} = await supabase.auth.signUp({
            email: signupDetails.email,
            password: signupDetails.password,
        })

        if (error) {
            console.warn('An error occurred attempting signup: ', error)
            throw error
        }

        if(!error) {
            console.log(data);
            const { error } = await supabase
                .from('users')
                .insert({userId: data.user?.id, firstname: signupDetails.firstname, lastname: signupDetails.lastname})

            if (error) {
                console.warn("An error occurred creating new user: ", error)
                throw error
            }
            if (!error) {
                console.log('successful signup')
            }
        }

        console.log(data);
        console.log(signupDetails);
        console.log(auth.value?.authCred);
    }

    async function signIn(signInDetails: SignInDetails) {
        console.log(signInDetails);
        const {data, error} = await supabase.auth.signInWithPassword({
            email: signInDetails.email,
            password: signInDetails.password,
        })

        if (error) {
            console.warn('An error occurred attempting sign-in: ', error)
            throw error
        }

        if(!error) {
            console.log(data);
            //TODO: set auth state
            localStorage.setItem(localAuthKey, JSON.stringify(auth))
        }


        console.log(auth.value?.authCred);
    }

    async function signOut() {
        const {error} = await supabase.auth.signOut()

        if (error) {
            console.warn('An error occurred attempting sign-out: ', error)
            throw error
        }

        if (!error) {
            localStorage.removeItem(localAuthKey)
            auth.value = undefined
        }
    }


    return {auth, signup, signIn, signOut}
})
