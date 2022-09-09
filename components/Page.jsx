import { useTheme } from "@emotion/react";
import { Text, Container, Paper, Box } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

const TEXT_PROPS = {
  size: "small",
  align: "center",
  color: "dimmed",
  mb: ".5em",
};

export default function PageLayout({
  children,
  headerChildren,
  footerChildren,
  ...props
}) {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const borderColor =
    colorScheme == "light" ? theme.colors.gray[4] : theme.colors.gray[8];

  return (
    <>
      {headerChildren && (
        <Paper
          component="header"
          p="sm"
          radius={0}
          sx={{
            zIndex: 100,
            position: "sticky",
            top: 0,
            borderBottom: `1px solid ${borderColor}`,
          }}
        >
          {headerChildren}
        </Paper>
      )}
      <Box sx={{ flex: "1 0 auto", minHeight: "80vh" }}>{children}</Box>
      {footerChildren && (
        <Paper
          radius={0}
          sx={{
            position: "sticky",
            bottom: 0,
            borderTop: `1px solid ${borderColor}`,
          }}
        >
          {footerChildren}
        </Paper>
      )}
      <Paper
        component="footer"
        radius={0}
        sx={{ borderTop: `1px solid ${borderColor}` }}
      >
        <Container size="sm" p="lg">
          <Text {...TEXT_PROPS}>
            This site is provided for fun only, no guarantee or warranty is
            provided. Use at your own risk.
          </Text>
          <Text {...TEXT_PROPS}>
            The source code is released under the MIT license.
          </Text>
          <Text {...TEXT_PROPS}>
            The questions and other site content are released into the public
            domain.
          </Text>
          <Text {...TEXT_PROPS}></Text>
        </Container>
      </Paper>
    </>
  );
}
