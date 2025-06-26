"use client";

import { HeaderPage } from "@/components/ui/header-page";
import api from "@/lib/axios";
import { formatRupiah } from "@/lib/utils";
import { Transaction } from "@/types/transaction";
import React, { useEffect, useState, use } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, CircleDollarSign, List, FileText } from "lucide-react";
import { TypeBadge } from "@/components/ui/badge-type";

const TransactionDetail = ({
  params,
}: {
  params: Promise<{ transactionId: string }>;
}) => {
  const { transactionId } = use(params);
  const [data, setData] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/api/transactions/${transactionId}`);
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch transaction:", error);
      } finally {
        setLoading(false);
      }
    };

    if (transactionId) fetchData();
  }, [transactionId]);

  if (loading) return <TransactionDetailSkeleton />;

  if (!data)
    return (
      <div className="py-4 px-2 sm:px-4 flex flex-col items-center justify-center h-[60vh]">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-medium">Transaction not found</h3>
          <p className="text-muted-foreground">
            The transaction you&apos;re looking for doesn&apos;t exist or may
            have been removed.
          </p>
        </div>
      </div>
    );

  return (
    <div className="py-4 px-2 sm:px-4">
      <HeaderPage
        title="Transaction Details"
        description="Detailed information about your transaction"
      />

      <div className="mt-8 rounded-lg border">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold flex items-center gap-4">
            {data.name}
            <TypeBadge type={data.type} />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <DetailItem
            icon={<CircleDollarSign className="h-5 w-5" />}
            label="Amount"
            value={formatRupiah(data.amount)}
            isPrimary
          />

          <DetailItem
            icon={<CalendarDays className="h-5 w-5" />}
            label="Date"
            value={new Date(data.transactionDate).toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          />

          <DetailItem
            icon={<List className="h-5 w-5" />}
            label="Category"
            value={data.category}
          />

          <DetailItem
            icon={<FileText className="h-5 w-5" />}
            label="Description"
            value={data.description || "No description"}
          />
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({
  icon,
  label,
  value,
  isPrimary = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isPrimary?: boolean;
}) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 p-2 rounded-full bg-muted/50 text-muted-foreground">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className={`mt-1 ${isPrimary ? "text-2xl font-semibold" : "text-lg"}`}>
        {value}
      </p>
    </div>
  </div>
);

const TransactionDetailSkeleton = () => (
  <div className="py-4 px-2 sm:px-4 mx-auto">
    <div className="space-y-4">
      <Skeleton className="h-10 w-1/3" />
      <Skeleton className="h-5 w-1/2" />
    </div>

    <div className="mt-8 bg-background rounded-lg border shadow-sm">
      <div className="p-6 border-b space-y-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-5 w-2/3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-start gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className={`h-6 ${i === 0 ? "w-1/2" : "w-2/3"}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TransactionDetail;
