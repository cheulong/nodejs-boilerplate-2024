import { createClient } from "@supabase/supabase-js";

const connectDb = () => {
  const supabaseUrl = "https://ucxghkurmahskwfteyjn.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY ?? "";

  const supabase = createClient(supabaseUrl, supabaseKey);
  console.log("Supabase connected successfully");

  return supabase;
};

export default connectDb;
