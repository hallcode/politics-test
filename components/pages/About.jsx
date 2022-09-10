import { Container, Text, Title } from "@mantine/core";
import PageLayout from "../Page";

export default function About() {
  return (
    <PageLayout
      headerChildren={
        <Container size="sm">
          <Title color="teal">About</Title>
        </Container>
      }
    >
      <Container size="sm">
        <Text>
          <p>
            This website is a little side-project inspired by the Political
            Compass test.
          </p>
          <p>
            I thought it was about time that idea was updated a little with
            newer questions and a modern interface.
          </p>
          <Title order={3}>How does the test work? </Title>
          <p>
            You use it like Tinder, swipe the question card to the right if you
            agree, and to the left if you disagree.
          </p>
          <Title order={3}>The theory behind the questions</Title>
          <p>
            I have decided upon the axes for this test are
            Collectivist/Individualist along the X axis and Traditional /
            Progressive along the Y axis.
          </p>
          <p>
            This is because in my view, pretty much everything in politics comes
            down to views on how we share out resources. There has been a lot of
            argument in recent years that we have moved past this, and other
            issues (such as identity and culture) have overtaken old debates on
            class and the distribution of wealth.
          </p>
          <p>
            While I agree that the issues of the day will change, this is
            obviously true… I do not accept that we have fundamentally moved
            beyond the key debate of how to equitably share resources. It is
            only possible to argue that we have, I think, from a position of
            privilege, where you do not fear scarcity. Unfortunately for most
            people, in most parts of the world, questions of who has what
            (including resources and money/power), why, and how they get it, are
            still the most important ones.
          </p>
          <p>
            Because of this, I settled on collectivism and individualism as the
            broad categories that most people fall into. It is largely
            interchangeable with left/right however I think the terms are more
            precise – the terms left and right-wing have baggage and imply all
            sorts of ideologies. While many cultures may currently be
            experiencing a breakdown of the traditional left and right, the
            divide between collectivist views and individualism is still clear.
          </p>
          <p>
            The political compass test utilises Authoritarianism/Liberalism for
            its Y axis, I have decided to go with Traditional/Progressive as I
            believe this is the other main cleavage in society now. I think most
            debates on most issues can be boiled down to being concerned with
            the distribution of resources and power, and either having a
            traditionalist or progressive outlook.
          </p>
          <Title order={3}>Calculating the result</Title>
          <p>
            I first devised a list of topics, and for each topic, wrote four
            statements, each being primarily collectivist, individualist,
            traditional, or progressive. If you agree with a statement, you get
            a point for the ideology attached to that statement.
          </p>
          <p>
            At the end, the number of collectivist statements you agreed with,
            is subtracted from the number of individualist ones, and the number
            of progressive subtracted from the number of traditional ones. This
            is turned into a percentage and becomes your score.
          </p>
        </Text>
      </Container>
    </PageLayout>
  );
}
