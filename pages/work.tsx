import * as React from "react";

import { Grid, Image, Container, Header } from "semantic-ui-react";

export const Work: React.FC = () => {
  return (
    <Container className="padding">
      <Header
        as="h1"
        content="This section is currently a Work In Progress."
        textAlign="center"
      />
      <p>
        Also the pictures change after each reload. Update, they are also all
        different picutres now. (Like whaaaaaa???) That's cool eh? Now I just
        need to make them something related.
      </p>
      <Grid stackable doubling columns={3}>
        <Grid.Column>
          <Header as="h1" content="Project 1" textAlign="center" />
          <p>5-10 Word Description</p>
          <Image
            src="https://picsum.photos/300"
            as="a"
            href="/"
            target="_blank"
            rounded
            centered
          />
        </Grid.Column>
        <Grid.Column>
          <Header as="h1" content="Project 2" textAlign="center" />
          <p>5-10 Word Description</p>
          <Image
            src="https://picsum.photos/301"
            as="a"
            href="/"
            target="_blank"
            rounded
            centered
          />
        </Grid.Column>
        <Grid.Column>
          <Header as="h1" content="Project 3" textAlign="center" />
          <p>5-10 Word Description</p>
          <Image
            src="https://picsum.photos/302"
            as="a"
            href="/"
            target="_blank"
            rounded
            centered
          />
        </Grid.Column>
        <Grid.Column>
          <Header as="h1" content="Project 4" textAlign="center" />
          <p>5-10 Word Description</p>
          <Image
            src="https://picsum.photos/303"
            as="a"
            href="/"
            target="_blank"
            rounded
            centered
          />
        </Grid.Column>
        <Grid.Column>
          <Header as="h1" content="Project 5" textAlign="center" />
          <p>5-10 Word Description</p>
          <Image
            src="https://picsum.photos/304"
            as="a"
            href="/"
            target="_blank"
            rounded
            centered
          />
        </Grid.Column>
        <Grid.Column>
          <Header as="h1" content="Project 6" textAlign="center" />
          <p>5-10 Word Description</p>
          <Image
            src="https://picsum.photos/305"
            as="a"
            href="/"
            target="_blank"
            rounded
            centered
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Work;
