import { NavLink, Stack } from "@mantine/core";
import Link from "next/link";
import { ColorSchemesSwitcher } from "../color-schemes-switcher";

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
      disabled: false,
    },
  ];
    return (
      <>
        <Stack>
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              component={Link}
              href={link.url}
              label={link.label}
              disabled={link.disabled}
            />
          ))}
          <ColorSchemesSwitcher />
        </Stack>
      </>
    );}