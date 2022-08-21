import { SupabaseStorageClient } from "@supabase/storage-js";

const { SUPABASE_KEY, SUPABASE_URL } = process.env;

export const supabase = new SupabaseStorageClient(`${SUPABASE_URL.replace(/\/$/, "")}/storage/v1`, {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
}).from("images");
