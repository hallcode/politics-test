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
import { useColorScheme } from "@mantine/hooks";
import { useTheme } from "@emotion/react";
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

  const theme = useTheme();
  const borderColor =
    colorScheme == "light" ? theme.colors.gray[4] : theme.colors.gray[8];

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
          width: "100%",
        }}
      >
        <Paper
          component="header"
          p="sm"
          radius={0}
          sx={{ zIndex: 50, borderBottom: `1px solid ${borderColor}` }}
        >
          <Container size="sm">
            <Group position="apart">
              <a href="/">
                <Image
                  src="https://www.politicstest.com/s/static/tpt_logo.svg"
                  height={50}
                  width="auto"
                />
              </a>
              <Burger opened={menu} onClick={() => setMenu(!menu)} />
            </Group>
          </Container>
        </Paper>
        <Stack
          component="article"
          spacing={0}
          sx={(theme) => ({
            position: "relative",
            flex: "1 0 auto",
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
