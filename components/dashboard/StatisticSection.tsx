'use client';

import { Card, SimpleGrid } from "@mantine/core";
import {motion} from 'framer-motion';

export default function StatisticSection() {
    return (
      <SimpleGrid
        cols={{
          xs: 1,
          md: 3,
        }}
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="hover:cursor-pointer"
              whileTap={{ scale: 0.9 }}
            >
              <Card shadow="md" withBorder>
                Statistic {index + 1}
              </Card>
            </motion.div>
          ))}
      </SimpleGrid>
    );
}