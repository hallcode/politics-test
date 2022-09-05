import { Button, Container, Title, Text, Card, Stack } from "@mantine/core";
import { useLocalStorage, useDocumentTitle } from "@mantine/hooks";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../Page";
import calculateResults from "../../utils/calculator";
import { useState, useEffect } from "react";
import { IconRepeat } from "@tabler/icons";

const TODAY = new Date();

export default function Results() {
  useDocumentTitle("Your Results | The Politics Test");
  const navigate = useNavigate();
  const [scores, setScores] = useState([0, 0]);

  const [answers, setAnswers] = useLocalStorage({
    key: "test-responses",
    defaultValue: [],
  });
  const [completedQuestions, setCompleted] = useLocalStorage({
    key: "user-completed",
    defaultValue: [],
  });
  const [completedDate, setDate] = useLocalStorage({
    key: "test-date",
    defaultValue: TODAY.toLocaleDateString(),
  });

  useEffect(() => {
    const s = calculateResults(answers);
    setScores(s);
  }, [answers]);

  const reset = () => {
    setAnswers([]);
    setCompleted([]);
    navigate("/test");
  };

  const Header = () => (
    <Container size="sm">
      <Title size="h3" sx={(theme) => ({ color: theme.primaryColor })}>
        Results
      </Title>
      <Text color="dimmed">You took the test on {completedDate}</Text>
    </Container>
  );

  const Footer = () => (
    <Container size="sm" p="md">
      <Button uppercase fullWidth onClick={reset} leftIcon={<IconRepeat />}>
        Take the test again
      </Button>
    </Container>
  );

  return (
    <PageLayout headerChildren={<Header />} footerChildren={<Footer />}>
      <Container size="sm" p="lg">
        <Stack>
          <Card withBorder shadow="sm">
            <Title align="center" size="h4">
              Congradulations, you're a
            </Title>
            <Title align="center" color="blue">
              Tory Wanker!
            </Title>
          </Card>

          <Card withBorder shadow="sm"></Card>
        </Stack>
      </Container>
    </PageLayout>
  );
}
