import { Code, Group, ScrollArea, Stack } from "@mantine/core";
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from "@tabler/icons-react";

export default function NavBar() {
  const mockdata = [
    { label: "Dashboard", icon: IconGauge },
    {
      label: "Market news",
      icon: IconNotes,
      initiallyOpened: true,
      links: [
        { label: "Overview", link: "/" },
        { label: "Forecasts", link: "/" },
        { label: "Outlook", link: "/" },
        { label: "Real time", link: "/" },
      ],
    },
    {
      label: "Releases",
      icon: IconCalendarStats,
      links: [
        { label: "Upcoming releases", link: "/" },
        { label: "Previous releases", link: "/" },
        { label: "Releases schedule", link: "/" },
      ],
    },
    { label: "Analytics", icon: IconPresentationAnalytics },
    { label: "Contracts", icon: IconFileAnalytics },
    { label: "Settings", icon: IconAdjustments },
    {
      label: "Security",
      icon: IconLock,
      links: [
        { label: "Enable 2FA", link: "/" },
        { label: "Change password", link: "/" },
        { label: "Recovery codes", link: "/" },
      ],
    },
  ];
  return (
    <nav>
      <Group justify="space-between">
        <Code fw={700}>v3.1.2</Code>
      </Group>
      <ScrollArea>
        {mockdata.map((item, index) => (
          <Stack key={index}>{item.label}</Stack>
        ))}
      </ScrollArea>
    </nav>
  );
}
