import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";
import type {AuthCredential} from "@/models/AuthCredential";
import type {SignupDetails} from "@/models/signupDetails";
import type {SignInDetails} from "@/models/SignInDetails";
import {appName} from "@/data";
import {supabase} from "@/lib/subaseClient";
import router from "@/router";

const localAuthKey = `${appName}-authCred`

export const useRecipeBookStore = defineStore('recipeBook', () => {

    const filteredCategories = ref<string[]>([]);
    const recipeSearchValue = ref<string>('');

    watch(recipeSearchValue, () => {
        console.log('recipeSearchValue: ', recipeSearchValue.value)
    })

    function setRecipeSearchValue() {
        recipeSearchValue.value = 'asdfasd'
    }

    return {filteredCategories, recipeSearchValue, setRecipeSearchValue}
})
