import { useState, useEffect } from "react";
import "./test.css";
import {
  Text,
  Group,
  Title,
  Button,
  Paper,
  Container,
  Box,
  Progress,
  Stack,
  Image,
} from "@mantine/core";
import { IconThumbDown, IconThumbUp, IconRefresh } from "@tabler/icons";
import Swipe from "../Swipe/Swipe";
import QUESTIONS from "../../utils/questions";
import { useLocalStorage } from "@mantine/hooks";
import DoneSVG from "../../undraw_awesome.svg";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const TODAY = new Date();

export default function Test() {
  const [value, setValue] = useState(0);
  const [currentQuestion, setQuestion] = useState(false);
  const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState(QUESTIONS);
  const [testLength, _] = useState(QUESTIONS.length);

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

  const getNextQuestion = (completed_questions) => {
    setProgress((completed_questions.length / testLength) * 100);

    if (completed_questions.length >= testLength) {
      setQuestion(false);
      return;
    }

    questions.forEach((q) => {
      if (!completed_questions.includes(q._id)) {
        setQuestion(q);
        console.log("Setting question", q._id);
        return;
      }
    });
  };

  useEffect(() => {
    let qs = questions;
    shuffle(qs);
    setQuestions(qs);
  }, []);

  useEffect(() => {
    console.log("answers or completedQuestions have changed");

    if (Array.isArray(completedQuestions)) {
      getNextQuestion(completedQuestions);
    }
  }, [answers, completedQuestions]);

  const handleDone = (v) => {
    if (v == 0) {
      return;
    }
    setValue(0);

    // Set Date
    setDate(TODAY.toLocaleDateString());

    // Set question to complete
    let compelted = [...completedQuestions];
    compelted.push(currentQuestion._id);
    setCompleted(compelted);

    // Save answer
    let response = { ...currentQuestion };
    response["response"] = v;
    let newAnswers = [...answers];
    newAnswers.push(response);
    console.log("setting answers", answers, newAnswers);
    setAnswers(newAnswers);
  };

  const reset = () => {
    setAnswers([]);
    setCompleted([]);
    getNextQuestion([]);
  };

  return (
    <>
      <Paper
        component="header"
        p="sm"
        radius={0}
        shadow="sm"
        withBorder
        mt={-1}
      >
        <Container size="sm">
          <Progress value={progress} />
        </Container>
      </Paper>
      <Container size="sm" mt="md">
        {currentQuestion && (
          <>
            <Swipe
              onChange={(new_value) => setValue(new_value)}
              onDone={handleDone}
            >
              <Title
                size="md"
                sx={(theme) => ({ color: theme.primaryColor })}
                mb="md"
              >
                Question {answers.length + 1}
              </Title>
              <Text size="lg">{currentQuestion.text}</Text>
            </Swipe>

            <Paper shadow="sm" radius="lg" p="sm" mt="lg">
              <Group component="footer" position="apart">
                <Button
                  size="lg"
                  radius="md"
                  uppercase
                  leftIcon={<IconThumbDown />}
                  sx={(theme) => ({
                    backgroundImage: theme.fn.gradient({
                      from: "red",
                      to: "pink",
                      deg: 45,
                    }),
                  })}
                >
                  Disagree
                </Button>
                <Button
                  size="lg"
                  radius="md"
                  uppercase
                  rightIcon={<IconThumbUp />}
                  sx={(theme) => ({
                    backgroundImage: theme.fn.gradient({
                      from: "green",
                      to: "lime",
                      deg: 45,
                    }),
                  })}
                >
                  Agree
                </Button>
              </Group>
            </Paper>
          </>
        )}

        {progress >= 100 && (
          <Paper withBorder shadow="md" p="md" radius="lg">
            <Stack align="center" spacing="lg">
              <Title align="center" color="dark">
                All done!
              </Title>
              <Text align="center" color="dimmed" size="lg">
                You completed the test on {completedDate}
              </Text>
              <Image width={250} fit="contain" src={DoneSVG} />
              <Group>
                <Button>View results</Button>
                <Button
                  variant="outline"
                  leftIcon={<IconRefresh />}
                  onClick={reset}
                >
                  Restart
                </Button>
              </Group>
            </Stack>
          </Paper>
        )}

        <Box
          className="drop-zone left"
          style={{ right: value < 0 ? "calc(100% - 100px)" : "100%" }}
          sx={(theme) => ({
            backgroundImage: theme.fn.gradient({
              from: "red",
              to: "pink",
              deg: 45,
            }),
          })}
        >
          <IconThumbDown size={52} />
          Disagree
        </Box>
        <Box
          className="drop-zone right"
          style={{ left: value > 0 ? "calc(100% - 100px)" : "100%" }}
          sx={(theme) => ({
            backgroundImage: theme.fn.gradient({
              from: "green",
              to: "lime",
              deg: 45,
            }),
          })}
        >
          <IconThumbUp size={52} />
          Agree
        </Box>
      </Container>
    </>
  );
}
