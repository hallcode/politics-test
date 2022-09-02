import { Paper, Title, Container, Divider, Text } from "@mantine/core";

export default function Wrapper({ children, ...props }) {
  const TEXT_PROPS = {
    size: "small",
    align: "center",
    color: "dimmed",
    mb: ".5em",
  };
  return (
    <>
      <Paper component="header" p="sm" radius={0} shadow="sm" withBorder>
        <Container size="sm">
          <Title>The Politics Test</Title>
        </Container>
      </Paper>
      <article>{children}</article>
      <Container size="sm" component="footer" my={50}>
        <Divider my="lg" />
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
    </>
  );
}
