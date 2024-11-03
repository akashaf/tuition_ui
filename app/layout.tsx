import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="auto">
          <div className="flex gap-4">
            <NavBar />
            <div>{children}</div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
