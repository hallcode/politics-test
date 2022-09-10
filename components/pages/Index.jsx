import {
  Card,
  Container,
  Stack,
  Title,
  Group,
  Text,
  Box,
  Paper,
} from "@mantine/core";
import { IconArrowUpRightCircle } from "@tabler/icons";
import { Link } from "react-router-dom";
import PageLayout from "../Page";

export default function Index() {
  return (
    <PageLayout>
      <Container component={Stack} size="sm" py="md" spacing="lg">
        <Card
          component={Link}
          to="/test"
          shadow="md"
          radius="lg"
          sx={(theme) => ({
            background: theme.fn.gradient(),
          })}
        >
          <Group position="apart" align="flex-end">
            <Box sx={{ flex: "0 1 66%" }}>
              <Title color="white" mb="sm">
                Take the test
              </Title>
              <Text size="lg" color="white">
                Answer the questions and find out where you sit on the political
                spectrum.
              </Text>
            </Box>
            <Box sx={{ flex: "0 1 auto" }}>
              <IconArrowUpRightCircle size={64} color="white" />
            </Box>
          </Group>
        </Card>

        <Box>
          <Title order={2} mt="lg">
            What is the Politics Test?
          </Title>
          <Text>
            <p>
              There are many theories which try to categorise political opinions
              into groups, or onto a spectrum. Probably the most famous these
              days is the political compas test, which inspired this website.
            </p>
            <p>
              As with any human trait, its impossible to accurately describe a
              person's whole ideology or their views by plotting it on a
              graph... however it's fun and the questions are hopefully thought
              provoking enough to be interesting.
            </p>
          </Text>
        </Box>
        <Paper withBorder p="sm">
          <Title order={3}>Cookies</Title>
          <Text>
            <p>
              Yeahh.... we don't use cookies on this site so we're not tracking
              you.
            </p>
            <p>
              It uses localStorage to remember your answers between sessions,
              and calculate your results if you come back to the site later. If
              you don't know what that means, don't worry.
            </p>
          </Text>
        </Paper>
      </Container>
    </PageLayout>
  );
}
