import React, { useState } from "react";
import NextLink from "next/link";

import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

// Semantic-UI
import { Menu, Container, Button, Icon, Sidebar } from "semantic-ui-react";

const DesktopContainer: React.FC = () => {
  return (
    <Media greaterThan="mobile">
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
    </Media>
  );
};

const MobileContainer: React.FC = () => {
  const [sidebarState, setSidebarState] = useState(false);
  return (
    <Media at="mobile" className="mobile-nav">
      <Sidebar
        as={Menu}
        animation="overlay"
        onHide={() => setSidebarState(false)}
        vertical
        visible={sidebarState}
      >
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
          <Menu.Item>Contact</Menu.Item>
        </NextLink>
      </Sidebar>

      <div className="open-nav">
        <Icon
          size="large"
          name="sidebar"
          onClick={() => setSidebarState(true)}
        />
      </div>
    </Media>
  );
};

export const NavBar: React.FC = () => {
  return (
    <MediaContextProvider>
      <DesktopContainer />
      <MobileContainer />
    </MediaContextProvider>
  );
};
