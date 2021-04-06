import * as React from "react";

// Styles
import { Grid, Header, Container, Image } from "semantic-ui-react";

export const About: React.FC = () => {
  return (
    <Container className="padding">
      <Grid stackable columns={2}>
        <Grid.Column>
          <Image
            src="https://raw.githubusercontent.com/ryanbop/ryan-brooks-portfolio/master/src/img/Me.jpg?token=AJW4736NWT6A7YPJMZS67A3ANQIB6"
            alt="Me"
            size="large"
          />
        </Grid.Column>
        <Grid.Column>
          <Header as="h1" content="Hello! I'm Ryan." textAlign="center" />
          <p>
            As an IT career professional, I have had experience in the technical
            and operational spaces. During my secondary and tertiary education,
            I constantly focused on ICT and improving my knowledge from my in
            school experience. Having established myself in the industry, I am
            continuing to develop and improve my skills as I look for further
            opportunities. My continually expanding knowledge is enhanced by my
            home infrastructure, including networking equiptment, server
            hardware and configuration. P1{" "}
          </p>
          <p>
            This website is dedicated to me, I guess??? The only area that gets
            super used is the `Blog` (which you can access using the top menu,
            as bope.cc/blog doesn't work). P2
          </p>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default About;
