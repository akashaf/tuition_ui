import { Stack, Text, Title } from "@mantine/core";
import UpcomingClassSection from "@/components/dashboard/UpcomingClassSection";
import StatisticSection from "@/components/dashboard/StatisticSection";

export default function Home() {
  return (
    <>
    <Stack classNames={{
      root: 'mb-4'
    }}>

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
        className="text-center text-gray-700 dark:text-gray-300 max-w-[500px] mx-auto"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
      >
        Geliga is a platform for learning and teaching online. We provide
        high-quality courses for students and teachers.
      </Text>
    </Stack>

      <Stack>
        <StatisticSection />
        <UpcomingClassSection />
      </Stack>
    </>
  );
}
