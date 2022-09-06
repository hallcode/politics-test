import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Divider,
} from "@mantine/core";
import {
  IconThumbDown,
  IconThumbUp,
  IconRepeat,
  IconArrowsLeftRight,
} from "@tabler/icons";
import Swipe from "../Swipe/Swipe";
import QUESTIONS from "../../utils/questions";
import { useLocalStorage } from "@mantine/hooks";
import PageLayout from "../Page";

function shuffle(array) {
  array.sort(() => Math.random() > 0.5);
}

const TODAY = new Date();

export default function Test() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [currentQuestion, setQuestion] = useState(false);
  const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState(QUESTIONS);
  const [testLength, _] = useState(QUESTIONS.length);

  const [flashDisagree, setDisagreeFlash] = useState("none");
  const [flashAgree, setAgreeFlash] = useState("none");

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
    if (value == 0) {
      return;
    }
    setAgreeFlash("none");
    setDisagreeFlash("none");
  }, [value]);

  useEffect(() => {
    if (Array.isArray(completedQuestions)) {
      getNextQuestion(completedQuestions);
    }
  }, [answers, completedQuestions]);

  useEffect(() => {
    // If done, redirect to results page
    if (progress >= 100) {
      navigate("/results");
    }
  }, [progress]);

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
    setAnswers(newAnswers);

    // Flash button
    flashButton(v);
  };

  const reset = () => {
    setAgreeFlash("none");
    setDisagreeFlash("none");
    setAnswers([]);
    setCompleted([]);
    getNextQuestion([]);
  };

  const flashButton = (choice) => {
    if (choice > 0) {
      setDisagreeFlash("none");
      setAgreeFlash("flash");
      return;
    }

    setAgreeFlash("none");
    setDisagreeFlash("flash");
  };

  const ActionButtons = () => {
    return (
      <Container size="sm" p="md">
        <Group component="footer" position="apart">
          <Button
            id="disagree-button"
            data-flash={flashDisagree}
            onClick={() => handleDone(-1)}
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
            id="agree-button"
            data-flash={flashAgree}
            onClick={() => handleDone(1)}
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
      </Container>
    );
  };

  const Header = () => (
    <Container size="sm">
      <Group align="center" position="center">
        <Button
          compact
          variant="subtle"
          size="sm"
          uppercase
          leftIcon={<IconRepeat size={18} />}
          onClick={reset}
        >
          Restart
        </Button>
        <Box sx={{ flex: "1 1 auto" }}>
          <Progress size="lg" value={progress} />
        </Box>
      </Group>
    </Container>
  );

  return (
    <PageLayout
      headerChildren={<Header />}
      footerChildren={progress < 100 && <ActionButtons />}
    >
      <Container size="sm" my="md">
        {currentQuestion && (
          <>
            <Swipe
              onChange={(new_value) => setValue(new_value)}
              onDone={handleDone}
            >
              <Stack sx={{ height: "100%" }}>
                <Title
                  size="h4"
                  sx={(theme) => ({ color: theme.primaryColor })}
                >
                  Question {answers.length + 1}
                </Title>
                <Divider />
                <Text size="xl" sx={{ flex: "1 0 auto" }}>
                  {currentQuestion.text}
                </Text>
                {progress == 0 && (
                  <Paper align="center" withBorder radius="md" p="sm">
                    <IconArrowsLeftRight size={32} />
                    <Text>Swipe to agree / disagree</Text>
                  </Paper>
                )}
              </Stack>
            </Swipe>
          </>
        )}

        <Box
          className={value < 0 ? "drop-zone left active" : "drop-zone left"}
          style={{
            zIndex: 2000,
          }}
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
          className={value > 0 ? "drop-zone right active" : "drop-zone right"}
          style={{
            zIndex: 2000,
          }}
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
    </PageLayout>
  );
}
