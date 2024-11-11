/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Title } from "@mantine/core";
import { AgGridReact } from "ag-grid-react";

export default function UpcomingClassSection () {
    const columnDefs = [
        { field: 'Subject' },
        { field: 'Date & Time' },
        { field: 'No of Student Pax' },
    ];
    return (
      <>
      <div className="h-[30vh] space-y-4 ag-theme-quartz">
        <Title classNames={{
          root: 'text-gray-700 dark:text-gray-300'
        }}>Upcoming Classes</Title>

      <AgGridReact rowData={[{
        Subject: 'Mathematics',
        'Date & Time': '2022-01-01 12:00:00',
        'No of Student Pax': 10
      }, {
        Subject: 'Science',
        'Date & Time': '2022-01-01 12:00:00',
        'No of Student Pax': 10
      }, {
        Subject: 'English',
        'Date & Time': '2022-01-01 12:00:00',
      }]} columnDefs={columnDefs as any} />
      </div>
      </>
    );
}