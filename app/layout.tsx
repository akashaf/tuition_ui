import type { Metadata } from "next";
import {
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
} from "@mantine/core";
import {Fira_Code} from "next/font/google";
import 'mantine-datatable/styles.layer.css'; // Mandatory CSS required by the Data Table
import "./globals.css";
import { breakpoints, colors } from "./theme";
import MainLayout from "@/components/layout";

const firaCode = Fira_Code({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geliga App",
  description: "Geliga App",
};

const theme = mergeMantineTheme(
  DEFAULT_THEME,
  createTheme({
    fontFamily: firaCode.style.fontFamily,
    breakpoints,
    colors,
  }),
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <MantineProvider theme={theme}>
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
