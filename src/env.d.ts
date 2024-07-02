/// <reference types="astro/client" />

export interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string
  readonly PUBLIC_SUPABASE_KEY: string
  // more env variables...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
