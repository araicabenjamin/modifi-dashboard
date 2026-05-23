import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ijzdgoezrbpgevajvufx.supabase.co";
const supabaseAnonKey = "sb_publishable_3th19cB2434xcxq8ovQTbA_MgTYLp2n";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);