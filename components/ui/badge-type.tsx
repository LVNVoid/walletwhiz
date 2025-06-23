import { Badge } from "@/components/ui/badge";

interface TypeBadgeProps {
  type: "income" | "expense";
}

export const TypeBadge = ({ type }: TypeBadgeProps) => {
  const config = {
    income: {
      text: "Income",
      color: "emerald",
      ping: "animate-ping",
    },
    expense: {
      text: "Expense",
      color: "red",
      ping: "",
    },
  };

  const { text, color, ping } = config[type];

  return (
    <Badge
      className={`bg-${color}-600/10 dark:bg-${color}-600/20 hover:bg-${color}-600/10 text-${color}-500 shadow-none  rounded-full flex items-center`}
    >
      <div
        className={`h-1.5 w-1.5 ${ping} rounded-full bg-${color}-500 mr-2`}
      />
      {text}
    </Badge>
  );
};
