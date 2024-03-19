import {defineStore} from "pinia";
import {ref} from "vue";
import type {AuthCredential} from "@/models/AuthCredential";
import type {SignupDetails} from "@/models/signupDetails";
import type {SignInDetails} from "@/models/SignInDetails";
import {appName} from "@/data";
import {supabase} from "@/lib/subaseClient";
import router from "@/router";

const localAuthKey = `${appName}-authCred`

export const useAuthStore = defineStore('auth', () => {
    const auth = ref<AuthCredential | undefined>({
        email: '',
        uid: '',
        accessToken: '',
        refreshToken: ''
    })

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

        if(data.user) {
            const { error } = await supabase
                .from('users')
                .insert({userId: data.user?.id, firstname: signupDetails.firstname, lastname: signupDetails.lastname})

            if (error) {
                console.warn("An error occurred creating new user: ", error)
                throw error
            }

            console.log('successful signup')
        }
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

        if(data.user && data.session) {
            const userData = {
                email: data.user!.email!,
                uid: data.user!.id,
                accessToken: data.session!.access_token,
                refreshToken: data.session!.refresh_token
            }

            auth.value = userData
            localStorage.setItem(localAuthKey, JSON.stringify(auth))
        }
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
            console.log('successful sign-out')
            await router.push('/')
        }
    }


    return {auth, signup, signIn, signOut}
})
