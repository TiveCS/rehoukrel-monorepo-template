import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    // Server Configuration
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    PORT: z.coerce.number().default(8080),

    // Database
    DATABASE_URL: z.url(),

    // MinIO / S3 Storage
    MINIO_ENDPOINT: z.string(),
    MINIO_ROOT_USER: z.string(),
    MINIO_ROOT_PASSWORD: z.string(),
    MINIO_USE_SSL: z.stringbool(),
    MINIO_BUCKET_UPLOADS: z.string().default("uploads"),
    MINIO_BUCKET_PUBLIC: z.string().default("public"),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
