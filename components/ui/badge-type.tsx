import { Badge } from "@/components/ui/badge";

interface TypeBadgeProps {
  type: "income" | "expense";
}

const TYPE_CONFIG = {
  income: {
    label: "Income",
    badgeClass:
      "bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500",
    dotClass: "bg-emerald-500 animate-ping",
  },
  expense: {
    label: "Expense",
    badgeClass:
      "bg-red-600/10 dark:bg-red-600/20 hover:bg-red-600/10 text-red-500",
    dotClass: "bg-red-500",
  },
} as const;

export const TypeBadge = ({ type }: TypeBadgeProps) => {
  const { label, badgeClass, dotClass } = TYPE_CONFIG[type];

  return (
    <Badge
      className={`${badgeClass} shadow-none rounded-full flex items-center`}
    >
      <div className={`h-1.5 w-1.5 ${dotClass} rounded-full mr-2`} />
      {label}
    </Badge>
  );
};
