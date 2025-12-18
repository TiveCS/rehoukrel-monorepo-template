import z, { type ZodObject } from "zod";

export const paginationRequestSchema = z.object({
	page: z.int().positive().min(1).default(1),
	pageSize: z.int().positive().min(1).max(100).default(10),
});

export const paginationResponseSchema = (itemSchema: ZodObject) =>
	z.object({
		page: z.int().positive(),
		pageSize: z.int().positive(),
		totalItems: z.int().nonnegative(),
		totalPages: z.int().positive(),
		hasNextPage: z.boolean(),
		hasPreviousPage: z.boolean(),
		items: z.array(itemSchema),
	});
