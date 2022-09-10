import { Container, List, Text, Title } from "@mantine/core";
import PageLayout from "../Page";

export default function Policy() {
  return (
    <PageLayout
      headerChildren={
        <Container size="sm">
          <Title color="teal">Legal information</Title>
        </Container>
      }
    >
      <Container size="sm" py="md">
        <Title order={2}>Privacy Policy</Title>
        <Text my="sm">
          <List type="ordered" spacing="sm">
            <List.Item>
              This website is run by a private individual in the United Kingdom.
            </List.Item>
            <List.Item>
              This website allows users to enter information about their
              political views which is sensitive personal information under the
              Data Protection Act(s). This information is not stored on the
              website's servers and is only recorded on the user's browser
              storage.
            </List.Item>
            <List.Item>
              If a user choses to use the share function, they may enter their
              name. This along with their results are encoded into the URL made
              available and again, no information is stored on the website's
              servers.
            </List.Item>
            <List.Item>
              Other than mentioned above, no other identifiable information is
              collected, stored, or processed.
            </List.Item>
            <List.Item>
              The website does not collect information intended to enable the
              tracking of website visitors, nor does it allow any third party to
              do so. However, the servers which make this website available do
              track requests to URLs on this server, which may include the pages
              visited for each IP address. This information is used only for the
              provision of the website and to identify and resolve technical
              problems that may arise.
            </List.Item>
          </List>
        </Text>
        <Title order={2} mt="lg">
          Terms of use
        </Title>
        <Text my="sm">
          <List type="ordered" spacing="sm">
            <List.Item>
              This website is provided "as-is" for the use and entertainment of
              the general public. No guarantee is provided and the website does
              not make any assurance about the uptime or continued availability
              of the website.
            </List.Item>
            <List.Item>
              By making use of this website you agree that the maker of the
              website is not to be held liable for any loss or damage caused to
              the user arising from its use.
            </List.Item>
          </List>
        </Text>
      </Container>
    </PageLayout>
  );
}
