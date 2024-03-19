import { createClient } from '@supabase/supabase-js'
import {supabaseKey, supabaseUrlPrefix} from "@/data";

export const supabase = createClient(`https://${supabaseUrlPrefix}.supabase.co`, supabaseKey)
