import Navbar from "@/components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  const { userId: clerkUserId } = await auth();

  const { userId } = await params;

  if (!clerkUserId) {
    redirect("/sign-in");
  }

  if (userId !== clerkUserId) {
    redirect("/");
  }

  return (
    <div className="container mx-auto space-y-6">
      <Navbar />
      {children}
    </div>
  );
}
