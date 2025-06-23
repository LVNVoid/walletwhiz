export type Transaction = {
  id: string;
  name: string;
  userId: string;
  amount: number;
  description?: string;
  type: "income" | "expense";
  category: string;
  transactionDate: string;
};
