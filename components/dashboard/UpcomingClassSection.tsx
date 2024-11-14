/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { format } from "date-fns";
import { DataTable } from "mantine-datatable";

export default function UpcomingClassSection() {
  const datas = Array.from({ length: 50 }, (_, index) => ({
    uuid: crypto.randomUUID(),
    subject: `Subject ${index + 1}`,
    no_of_students: Math.floor(Math.random() * 30) + 1,
    date_and_time: format(
      new Date(Date.now() + index * 1000 * 60 * 60 * 24),
      "yyyy-MM-dd hh:mm a",
    ),
  }));
  
  return (
    <DataTable
      withTableBorder
      withColumnBorders
      records={datas}
      columns={[
        {
          accessor: "uuid",
          hidden: true,
        },
        {
          accessor: "subject",
        },
        {
          accessor: "no_of_students",
        },
        {
          accessor: "date_and_time",
        },
      ]}
    />
  );
}
