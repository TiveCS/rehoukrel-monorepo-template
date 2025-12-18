export const ExpenseCategory = {
  Food: 'food',
  Transportation: 'transportation',
  Health: 'health',
  Entertainment: 'entertainment',
  Education: 'education',
  Investment: 'investment',
  Household: 'household',
  Others: 'others',
} as const;

export type ExpenseCategory = keyof typeof ExpenseCategory;
