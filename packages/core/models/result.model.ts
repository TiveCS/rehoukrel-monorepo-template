import z from "zod";

export const successResultSchema = z.object({
	success: z.literal(true),
	data: z.unknown(),
});

export const resultSchema = z.object({
	success: z.boolean(),
});
