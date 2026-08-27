/// <reference types="astro/client" />

declare global {
  interface Env {
    RESEND_API_KEY: string;
    SUPABASE_URL: string;
    SUPABASE_KEY: string;
  }
}