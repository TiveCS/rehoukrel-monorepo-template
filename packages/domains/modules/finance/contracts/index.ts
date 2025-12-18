import z from "zod";
import { ExpenseCategory } from "../models";

export const postExpensesRequestSchema = z.object({
  amount: z.int().positive(),
  note: z.string().max(50).optional(),
  occurredAt: z.iso.date(),
  category: z.enum(ExpenseCategory),
});

export const putExpensesRequestSchema = z.object({
  amount: z.int().positive(),
  note: z.string().max(50).optional(),
  occurredAt: z.iso.date(),
  category: z.enum(ExpenseCategory),
});
