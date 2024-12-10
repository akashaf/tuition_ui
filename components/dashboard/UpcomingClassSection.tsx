/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Title } from "@mantine/core";
import { DataTable } from "mantine-datatable";

export default function UpcomingClassSection () {
  return (
    <>
    <Title>Upcoming Classess</Title>
    <DataTable
      withTableBorder
      borderRadius="sm"
      shadow="sm"
      withColumnBorders
      highlightOnHover
      fz="md"
      minHeight={150}
      verticalAlign="center"
      records={[]}
      columns={[
        { accessor: "Class" },
        { accessor: "Date" },
        { accessor: "Time" },
        { accessor: "Teacher" },
        { accessor: "Location" },
        { accessor: "Status" },
      ]}
    />
    </>
  );
}