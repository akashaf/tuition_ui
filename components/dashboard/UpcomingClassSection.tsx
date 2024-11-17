/* eslint-disable @typescript-eslint/no-explicit-any */

import { Text, Title } from "@mantine/core";
import { format } from "date-fns";
import { DataTable } from "mantine-datatable";

export default function UpcomingClassSection() {
  const datas = Array(5)
    .fill(0)
    .map((_, index) => ({
      id: crypto.randomUUID(),
      date_and_time: format(new Date(), "do MMMM yyyy, hh:mm a"),
      subject: `Subject ${index + 1}`,
      status: "Upcoming",
      no_of_students: Math.floor(Math.random() * 100),
    }));

    const columns = [
      { accessor: "id", hidden: true },
      { accessor: "subject" },
      { accessor: "no_of_students" },
      { accessor: "date_and_time" },
      {
        accessor: "status",
      },
    ];

  return (
    <>
      <Title classNames={{
        root: 'mt-4'
      }}>
        <Text className="text-gray-700 dark:text-gray-300 font-semibold">
          Upcoming Classes
        </Text>
      </Title>
      <DataTable
        shadow="lg"
        withTableBorder
        borderRadius="sm"
        withColumnBorders
        highlightOnHover
        horizontalSpacing="md"
        verticalSpacing="md"
        records={datas}
        columns={columns}
        defaultColumnProps={{
          titleClassName: "text-center font-semibold uppercase",
          noWrap: true,
        }}
      />
    </>
  );
}
