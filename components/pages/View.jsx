import {
  Button,
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Image,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageLayout from "../Page";
import calculateResults, {
  getColour,
  getDescription,
} from "../../utils/calculator";
import { useState, useEffect } from "react";
import { IconRepeat } from "@tabler/icons";
import "./results.css";
import Descriptions from "../Descriptions";

const TODAY = new Date();

export default function View() {
  useDocumentTitle("Results | The Politics Test");
  const [scores, setScores] = useState({});

  const [nickname, setNickname] = useState("");
  const [token, setToken] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");

  const params = useParams();

  useEffect(() => {
    setToken(params.token);
  }, []);

  useEffect(() => {
    const data_raw = atob(token);
    if (data_raw == "") {
      return;
    }
    const data_obj = JSON.parse(data_raw);
    setNickname(data_obj.nickname);
    setScores({
      ci: data_obj.ci,
      tp: data_obj.tp,
    });
    setDescription(data_obj.description);
  }, [token]);

  useEffect(() => {
    let colr = getColour(scores);
    setColour(colr);
  }, [scores]);

  const Header = () => (
    <Container size="sm">
      <Title size="h3" sx={(theme) => ({ color: theme.primaryColor })}>
        {nickname}'s Results
      </Title>
    </Container>
  );

  const Footer = () => (
    <Container component={Group} size="sm" p="md" position="center">
      <Button uppercase component={Link} to="/test" leftIcon={<IconRepeat />}>
        Take the test
      </Button>
    </Container>
  );

  return (
    <PageLayout headerChildren={<Header />} footerChildren={<Footer />}>
      <Container size="sm" p="lg">
        <Stack>
          <Title align="center" size="h4">
            {nickname} is a
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

          <Descriptions />
        </Stack>
      </Container>
    </PageLayout>
  );
}
