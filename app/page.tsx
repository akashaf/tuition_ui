import { Card, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import UpcomingClassSection from "@/components/dashboard/UpcomingClassSection";

export default function Home() {
  const serverCalc = Math.floor(Math.random() * 100);
  return (
    <>
      <Title className="text-center mt-20">
        <span className="text-gray-700 dark:text-gray-300">Welcome to </span>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "black" }}
        >
          Geliga
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
        Geliga is a platform for learning and teaching online. We provide
        high-quality courses for students and teachers.
      </Text>

      <Stack>
        <SimpleGrid
         classNames={{
          root: 'mt-4'
         }}
          cols={{
            xs: 1,
            md: 3,
          }}
        >
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Card classNames={{
                root: 'text-center hover:motion-scale-in-[0.79] hover:motion-scale-in-delay-75 hover:cursor-pointer'
              }} key={index} shadow="sm" padding="lg" radius="md" withBorder>
                <Stack>
                  <Text fw={500}>Statistic {index + 1}</Text>
                  <Text>{serverCalc}</Text>
                </Stack>
              </Card>
            ))}
        </SimpleGrid>
        <UpcomingClassSection />
      </Stack>
    </>
  );
}
