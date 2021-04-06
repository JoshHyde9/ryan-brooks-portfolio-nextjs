import * as React from "react";
import NextLink from "next/link";

// Sematnic-UI
import { Button, Container, Header, Icon } from "semantic-ui-react";

export const HomepageTitle: React.FC = () => {
  return (
    <Container text>
      <Header className="title" as="h1">
        Ryan Brooks
      </Header>
      <Header as="h2" className="sub-title">
        Some IT nerd who plays with servers and not himself.
      </Header>
      <NextLink href="/work">
        <Button color="pink" size="huge" inverted className="title-btn">
          View Work <Icon name="arrow right" />
        </Button>
      </NextLink>
    </Container>
  );
};
