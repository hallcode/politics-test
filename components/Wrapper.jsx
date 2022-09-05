import {
  Paper,
  Container,
  Group,
  Burger,
  Stack,
  Image,
  Drawer,
  NavLink,
} from "@mantine/core";
import FullLogo from "../tpt_logo.svg";
import { useColorScheme } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  IconHome,
  IconListDetails,
  IconInfoCircle,
  IconLicense,
} from "@tabler/icons";

export default function Wrapper({ children, ...props }) {
  const colorScheme = useColorScheme();
  const location = useLocation();
  const [menu, setMenu] = useState(false);

  useEffect(() => setMenu(false), [location]);

  const TEXT_PROPS = {
    size: "small",
    align: "center",
    color: "dimmed",
    mb: ".5em",
  };
  return (
    <>
      <Stack
        spacing={0}
        sx={{
          minHeight: "100vh",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Paper
          component="header"
          p="sm"
          radius={0}
          shadow="sm"
          withBorder
          sx={{ zIndex: 50, margin: "-1px" }}
        >
          <Container size="sm">
            <Group position="apart">
              <Image src={FullLogo} height={50} width="auto" />
              <Burger opened={menu} onClick={() => setMenu(!menu)} />
            </Group>
          </Container>
        </Paper>
        <Stack
          component="article"
          spacing={0}
          sx={(theme) => ({
            flex: "1 0 auto",
            backgroundColor:
              colorScheme == "light"
                ? theme.colors.gray[2]
                : theme.colors.dark[8],
          })}
        >
          {children}
        </Stack>
      </Stack>

      <Drawer
        opened={menu}
        onClose={() => setMenu(false)}
        title="The Politics Test"
        padding="xl"
        transition="scale-x"
      >
        <Stack>
          <NavLink icon={<IconHome />} label="Home" component={Link} to="/" />
          <NavLink
            icon={<IconListDetails />}
            label="The Test"
            component={Link}
            to="/test"
          />
          <NavLink
            icon={<IconInfoCircle />}
            label="About"
            component={Link}
            to="/about"
          />
          <NavLink
            icon={<IconLicense />}
            label="Terms / Privacy Policy"
            component={Link}
            to="/terms"
          />
        </Stack>
      </Drawer>
    </>
  );
}
