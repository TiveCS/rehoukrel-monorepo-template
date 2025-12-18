import type { CommonError } from "@repo/core"

export type ExpenseError = CommonError & {
  code: `expense.${string}`
}

export const ExpenseErrors = {

}
