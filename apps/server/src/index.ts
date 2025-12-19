import cors from "@elysiajs/cors";
import openapi, { fromTypes } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { env } from "./env";

const app = new Elysia()
	.use(
		cors({
			origin: "http://localhost:3001",
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			credentials: true,
			allowedHeaders: ["Content-Type", "Authorization"],
		}),
	)
	.use(
		openapi({
			references: fromTypes(),
		}),
	)
	.get("/", () => {})
	.listen(env.PORT);

console.log(`🦊 Elysia is running at ${app.server?.url}`);
