"use client";

import api from "@/lib/axios";
import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const TransactionTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/transactions");
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TransactionTable;
