"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  LucideIcon,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
  CreditCard,
  Target,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
  CreditCard,
  Target,
};

interface StatsCardProps {
  title: string;
  value: string | number;
  iconName?: keyof typeof iconMap;
  description?: string;
  className?: string;
  variant?: "default" | "primary" | "subtle";
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  isHighlighted?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  iconName,
  description,
  className,
  trend,
  trendValue,
  isHighlighted = false,
}) => {
  const Icon = iconName ? iconMap[iconName] : undefined;

  const getVariantStyles = () => {
    if (isHighlighted) {
      return {
        card: "border-[#00A550]/30 bg-gradient-to-br from-[#00A550]/5 to-[#00A550]/10 dark:from-[#00A550]/10 dark:to-[#00A550]/5",
        icon: "text-[#00A550] bg-[#00A550]/10",
        value: "text-zinc-900 dark:text-zinc-100",
        title: "text-zinc-700 dark:text-zinc-300",
      };
    }

    return {
      card: "border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm",
      icon: "text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800",
      value: "text-zinc-900 dark:text-zinc-100",
      title: "text-zinc-600 dark:text-zinc-400",
    };
  };

  const getTrendStyles = () => {
    switch (trend) {
      case "up":
        return "text-[#00A550] dark:text-[#00A550]";
      case "down":
        return "text-red-500 dark:text-red-500/80";
      default:
        return "text-zinc-500 dark:text-zinc-400";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return TrendingUp;
      case "down":
        return TrendingDown;
      default:
        return null;
    }
  };

  const styles = getVariantStyles();
  const TrendIcon = getTrendIcon();

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/20 dark:hover:shadow-zinc-800/20 hover:-translate-y-0.5 w-full",
        styles.card,
        className
      )}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-50/50 dark:to-zinc-800/20" />

      <CardContent className="relative px-4 md:py-4 min-w-0 break-words">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <p className={cn("text-sm font-medium", styles.title)}>{title}</p>

            <div className="flex items-baseline gap-3">
              <h3
                className={cn(
                  "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight",
                  styles.value
                )}
              >
                {value}
              </h3>

              {trend && trendValue && (
                <div
                  className={cn(
                    "flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium",
                    getTrendStyles()
                  )}
                >
                  {TrendIcon && <TrendIcon className="h-4 w-4" />}
                  {trendValue}
                </div>
              )}
            </div>

            {description && (
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {Icon && (
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 group-hover:scale-105 shrink-0",
                styles.icon
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
          )}
        </div>

        {isHighlighted && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00A550]/0 via-[#00A550]/50 to-[#00A550]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </CardContent>
    </Card>
  );
};
