import * as React from "react";
import NextLink from "next/link";

// Semantic-UI
import { Menu, Container, Button, Icon } from "semantic-ui-react";

export const NavBar: React.FC = () => {
  return (
    <Menu size="large" className="nav-bar">
      <Container>
        <NextLink href="/">
          <Menu.Item>Home</Menu.Item>
        </NextLink>
        <NextLink href="/work">
          <Menu.Item>Work</Menu.Item>
        </NextLink>
        <NextLink href="/about">
          <Menu.Item>About</Menu.Item>
        </NextLink>
        <NextLink href="/blog">
          <Menu.Item>Blog</Menu.Item>
        </NextLink>
        <NextLink href="/contact">
          <Menu.Item position="right">
            <Button inverted color="pink">
              <Icon name="mail outline" /> Contact
            </Button>
          </Menu.Item>
        </NextLink>
      </Container>
    </Menu>
  );
};
