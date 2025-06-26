"use client";

import { formatRupiah } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { TypeBadge } from "@/components/ui/badge-type";
import { useRouter } from "next/navigation";
import { Transaction } from "@/types/transaction";

interface ActionMenuProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
}

function ActionMenu({ transaction, onDelete }: ActionMenuProps) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.push(`/transactions/${transaction.id}`)}
        >
          Detail
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Edit", transaction)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onDelete(transaction.id)}
          className="text-red-600"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const columns = (params: {
  onDelete: (id: string) => void;
}): ColumnDef<Transaction>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return <div>{formatRupiah(row.getValue("amount"))}</div>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as "income" | "expense";
      return (
        <div>
          <TypeBadge type={type} />
        </div>
      );
    },
  },
  {
    accessorKey: "transactionDate",
    header: "Date",
    cell: ({ row }) => {
      return (
        <div>
          {new Date(row.getValue("transactionDate")).toLocaleDateString(
            "en-US",
            {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      return (
        <ActionMenu transaction={row.original} onDelete={params.onDelete} />
      );
    },
  },
];
