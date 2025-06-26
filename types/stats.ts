type Trend = {
  direction: "up" | "down" | null;
  value: number;
};

export type Stats = {
  income: {
    current: number;
    trend: Trend;
  };
  expense: {
    current: number;
    trend: Trend;
  };
  balance: number;
};

export type ChartData = {
  period: string;
  income: number;
  expenses: number;
};
