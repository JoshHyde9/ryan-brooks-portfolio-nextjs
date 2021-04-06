import * as React from "react";

import { Container, Header } from "semantic-ui-react";

export const Contact: React.FC = () => {
  return (
    <Container className="padding">
      <Header as="h1" content="Contact Me."></Header>
      <p>
        If you have any questions at all about the website or want to learn more
        about me (or you want to hire me [please no service desk, unless it is
        service desk level 2 or 3]), please do not hesitate to contact me below.{" "}
      </p>
      <ul>
        <li>
          <a href="mailto:ryan@bope.cc?Subject=Hello%20Ryan" target="_top">
            ryan@bope.cc
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Contact;
