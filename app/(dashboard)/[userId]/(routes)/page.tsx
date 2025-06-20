"use client";

import { useUser } from "@clerk/nextjs";

const DashboardPage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Email: {user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default DashboardPage;
