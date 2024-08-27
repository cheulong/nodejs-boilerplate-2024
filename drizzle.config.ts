import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/config/drizzle/drizzle.schema.ts",
  out: "./src/config/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
