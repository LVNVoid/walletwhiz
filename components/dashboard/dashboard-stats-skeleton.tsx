import { Skeleton } from "@/components/ui/skeleton";

export const DashboardStatsSkeleton = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="border rounded-2xl p-4 shadow-sm space-y-3">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-8" />
          </div>
        </div>
      ))}
    </>
  );
};
