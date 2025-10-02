import { defineConfig } from "drizzle-kit";
import process from "node:process";
export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/DB/schema',
  out: './drizzle',
  casing: 'snake_case',
  dbCredentials: {
       url: process.env.DATABASE_URL!,
    },
})
