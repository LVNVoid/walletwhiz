"use client";

import { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import api from "@/lib/axios";
import { ChartData } from "@/types/stats";

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-2)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function FinanceChart() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [mode, setMode] = useState<"monthly" | "weekly">("monthly");

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(
        `/api/transactions/stats/overview?mode=${mode}`
      );
      setChartData(res.data);
    };
    fetchData();
  }, [mode]);

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <CardTitle>Income & Expenses Overview</CardTitle>
          <CardDescription>
            {mode === "monthly"
              ? "Visual trend from last 6 months"
              : "Weekly trend for this month"}
          </CardDescription>
        </div>
        <Select
          value={mode}
          onValueChange={(val) => setMode(val as "monthly" | "weekly")}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ left: 8, right: 8, top: 4, bottom: 4 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="period"
              interval="preserveStartEnd"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <defs>
              <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-income)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-expenses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="expenses"
              type="natural"
              fill="url(#fillExpenses)"
              stroke="var(--color-expenses)"
              fillOpacity={0.4}
              stackId="a"
            />
            <Area
              dataKey="income"
              type="natural"
              fill="url(#fillIncome)"
              stroke="var(--color-income)"
              fillOpacity={0.4}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Visual trend helps you make smarter decisions
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Track and improve monthly.
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
