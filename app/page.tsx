import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import { Card, SimpleGrid, Stack, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Title className="text-center mt-20">
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Mantine
        </Text>{" "}
        +
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "blue", to: "green" }}
        >
          TailwindCSS
        </Text>
      </Title>
      <Text
        className="text-center text-gray-700 dark:text-gray-300 max-w-[500px] mx-auto mt-xl"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
      >
        This starter Next.js project includes a minimal setup for Mantine with
        TailwindCSS. To get started edit page.tsx file.
      </Text>

      <Stack>
        <div className="flex justify-center mt-10">
          <ColorSchemesSwitcher />
        </div>
        <SimpleGrid
          cols={{
            xs: 1,
            md: 3,
          }}
        >
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Card key={index}>Statistic {index + 1}</Card>
            ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}
