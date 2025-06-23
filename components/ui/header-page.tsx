"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeaderPageProps {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonIcon?: ReactNode;
  className?: string;
}

export const HeaderPage = ({
  title,
  description,
  buttonText,
  onButtonClick,
  buttonIcon,
  className,
}: HeaderPageProps) => {
  return (
    <section
      className={cn(
        "flex flex-col gap-4 items-start justify-between sm:flex-row sm:items-center py-4",
        className
      )}
    >
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
        {description && (
          <p className="text-sm max-w-md text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {buttonText && onButtonClick && (
        <Button
          variant="outline"
          className="flex items-center gap-2 self-start sm:self-auto"
          onClick={onButtonClick}
        >
          {buttonIcon}
          {buttonText}
        </Button>
      )}
    </section>
  );
};
