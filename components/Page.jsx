import { Text, Container, Paper, Box } from "@mantine/core";

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
  return (
    <>
      {headerChildren && (
        <Paper
          component="header"
          p="sm"
          radius={0}
          shadow="sm"
          withBorder
          sx={{ zIndex: 100, position: "sticky", top: 0, margin: "0 -1px" }}
        >
          {headerChildren}
        </Paper>
      )}
      <Box sx={{ flex: footerChildren ? "initial" : "1 0 auto" }}>
        {children}
      </Box>
      {footerChildren && (
        <Paper
          radius={0}
          withBorder
          sx={(theme) => ({
            position: "sticky",
            flex: "1 0 auto",
            bottom: 0,
            margin: "0 -1px",
          })}
        >
          {footerChildren}
        </Paper>
      )}
      <Paper
        component="footer"
        withBorder
        radius={0}
        shadow="md"
        sx={{ margin: "0 -1px" }}
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
