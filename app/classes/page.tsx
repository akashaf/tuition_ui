import { DataTable } from "mantine-datatable";

export default function Classes() {
    return (
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
                { accessor: "className", title: "Class Name" },
                { accessor: "date", title: "Date" },
                { accessor: "time", title: "Time" },
                { accessor: "teacher", title: "Teacher" },
                { accessor: "location", title: "Location" },
                { accessor: "status", title: "Status" },
            ]}
        />
    );
}