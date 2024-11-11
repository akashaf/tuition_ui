import { NavLink, Stack } from "@mantine/core";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      label: "Dashboard",
      url: "/",
      disabled: false,
    },
    {
      label: "Classes",
      url: "/classes",
      disabled: true,
    },
  ];
    return (
      <>
        {links.map((link, idx) => (
          <Stack key={idx}>
            <NavLink component={Link} href={link.url} label={link.label} disabled={link.disabled} />
          </Stack>
        ))}
      </>
    );}