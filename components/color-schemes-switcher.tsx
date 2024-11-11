"use client";

import { useMantineColorScheme, Button, Group } from "@mantine/core";

export function ColorSchemesSwitcher() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button
        classNames={{
          root: "bg-red-500 dark:bg-yellow-500",
        }}
        onClick={() => setColorScheme("light")}
      >
        Light
      </Button>
      <Button onClick={() => setColorScheme("dark")}>Dark</Button>
      <Button onClick={() => setColorScheme("auto")}>Auto</Button>
    </Group>
  );
}
