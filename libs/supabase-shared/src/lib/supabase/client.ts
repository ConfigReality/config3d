
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "../../types/supabase";

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NX_SUPABASE_URL!,
    process.env.NX_SUPABASE_ANON_KEY!
  );