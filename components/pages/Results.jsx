import {
  Button,
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Image,
  Modal,
  TextInput,
  Box,
  CopyButton,
  SimpleGrid,
} from "@mantine/core";
import Descriptions from "../Descriptions";
import { useLocalStorage, useDocumentTitle } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import PageLayout from "../Page";
import calculateResults, {
  getColour,
  getDescription,
} from "../../utils/calculator";
import { useState, useEffect } from "react";
import {
  IconClipboard,
  IconClipboardCheck,
  IconCopy,
  IconLink,
  IconRepeat,
  IconShare,
} from "@tabler/icons";
import "./results.css";

const TODAY = new Date();

export default function Results() {
  useDocumentTitle("Your Results | The Politics Test");
  const navigate = useNavigate();
  const [scores, setScores] = useState([0, 0]);
  const [testDone, setTestDone] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [nickname, setNickname] = useState("");
  const [token, setToken] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");

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
    const obj = {
      ...scores,
      nickname,
      description,
    };

    let json = JSON.stringify(obj);
    let t = btoa(json);
    console.log(json, t);
    setToken(t);
  }, [nickname, scores, description]);

  useEffect(() => {
    let desc = getDescription(scores);
    let colr = getColour(scores);
    setDescription(desc);
    setColour(colr);
  }, [scores]);

  useEffect(() => {
    const s = calculateResults(answers);
    if (completedQuestions.length >= 1) {
      setTestDone(true);
    }
    setScores(s);
  }, [answers, completedQuestions]);

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
      {testDone && (
        <Text color="dimmed">You took the test on {completedDate}</Text>
      )}
    </Container>
  );

  const Footer = () => (
    <Container component={Group} size="sm" p="md" position="center">
      <Button
        uppercase
        onClick={reset}
        leftIcon={<IconRepeat />}
        variant="light"
      >
        Take the test {testDone && "again"}
      </Button>
      {testDone && (
        <Button
          uppercase
          leftIcon={<IconShare />}
          onClick={() => setShowShare(true)}
        >
          Share
        </Button>
      )}
    </Container>
  );

  return (
    <>
      <PageLayout headerChildren={<Header />} footerChildren={<Footer />}>
        <Container size="sm" p="lg">
          <Stack>
            {!testDone && (
              <Card withBorder shadow="sm">
                <Title align="center" size="h4">
                  You need to take the test before we can show you any results
                </Title>
                <Text align="center" color="dimmed">
                  Click below to take the test now.
                </Text>
              </Card>
            )}
            {testDone && (
              <>
                <Title align="center" size="h4">
                  Congratulations, you're a
                </Title>
                <Title
                  size={40}
                  align="center"
                  color={colour}
                  sx={{ textTransform: "capitalize" }}
                >
                  {description}
                </Title>
                <Card withBorder>
                  <Card.Section>
                    <Image
                      src={`https://www.politicstest.com/s/graph/${scores.ci}/${scores.tp}`}
                      alt="Graph showing your politics"
                      fit="contain"
                      withPlaceholder
                    />
                  </Card.Section>
                </Card>
              </>
            )}

            <Descriptions />
          </Stack>
        </Container>
      </PageLayout>

      <Modal
        title="Create share link..."
        centered
        opened={showShare}
        onClose={() => setShowShare(false)}
      >
        <Stack>
          <TextInput
            label="Your name"
            description="We don't store this, it's just used so people who look at your results know who you are."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          {nickname && (
            <TextInput
              readOnly
              label="Personal link"
              description="Anyone with this link will be able to see your results."
              value={`https://www.politicstest.com/s/share/${token}`}
              icon={<IconLink />}
              onClick={(e) => e.target.select()}
            />
          )}

          <Group position="center" mt="sm">
            <Button
              variant="light"
              uppercase
              onClick={() => setShowShare(false)}
            >
              Cancel
            </Button>
            {nickname && (
              <CopyButton
                value={`https://www.politicstest.com/s/share/${token}`}
              >
                {({ copied, copy }) => (
                  <Button
                    color={copied ? "green" : "teal"}
                    uppercase
                    onClick={copy}
                    leftIcon={
                      copied ? <IconClipboardCheck /> : <IconClipboard />
                    }
                  >
                    Copy Link
                  </Button>
                )}
              </CopyButton>
            )}
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
