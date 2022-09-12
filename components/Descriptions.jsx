import { Card, Title, Text, Box, SimpleGrid } from "@mantine/core";
export default function Descriptions() {
  return (
    <Card>
      <Title order={3} mb="md">
        What does it mean?
      </Title>
      <SimpleGrid cols={1} breakpoints={[{ minWidth: "sm", cols: 2 }]}>
        <Box>
          <Title order={4}>Collectivist</Title>
          <Text mb="sm">
            In the words of Spock: "The needs of the many, out way the needs of
            the few". Collectivists believe that resources should be divided
            amongst society fairly, with priority given to people based on their
            needs and the needs of society and giving less weight to what
            individuals might want. It is usually based on the idea that the
            best outcome for individuals will be achieved by focusing on the
            needs of the group.
          </Text>
        </Box>
        <Box>
          <Title order={4}>Individualist</Title>
          <Text mb="sm">
            Right-wing views are generally characterised by a belief that
            individual freedoms should be prioritised, to varying degrees, more
            than anything else. This manifests in support for small government
            and low taxes, as big government and high taxes are seen as
            infringements of individual rights. It’s important to note that
            “individual rights” is often seen to include the rights of companies
            and, in America, the States.
          </Text>
        </Box>
        <Box>
          <Title order={4}>Traditional</Title>
          <Text>
            People will traditional views tend to favour 20th-century
            hierarchies and power structures, such as the traditional
            man-woman-children family unit. They are generally against making
            quick changes to society of any kind, preferring small-c
            conservatism, and its slower pragmatism.
          </Text>
        </Box>
        <Box>
          <Title order={4}>Progressive</Title>
          <Text>
            Progressives are generally seen as being left-wing or collectivist.
            Certainly, left-wing progressives tend to be in favour of socially
            liberal policies – but it is also possible for people to be radical
            on the right wing, usually in the form of laissez-faire capitalists
            and libertarians. It’s necessary to look at both axes to interpret
            someone’s political stance – looking at each separately will only
            tell half the story.
          </Text>
        </Box>
      </SimpleGrid>
    </Card>
  );
}
