import * as React from "react";
import NextLink from "next/link";
import dayjs from "dayjs";
import Markdown from "react-markdown";

// Styles
import { Card, Button, Grid } from "semantic-ui-react";

interface Props {
  title: string;
  content: string;
  date: string;
  icon: string;
  path: string;
}

export const BlogItem: React.FC<Props> = ({ title, content, date, path }) => {
  return (
    <Grid.Column>
      <Card>
        <Card.Content header={title} />
        <Card.Content
          description={
            content.length > 100 ? (
              <Markdown source={`${content.substring(0, 100)}...`} />
            ) : (
              <Markdown source={content} />
            )
          }
        />
        <Card.Content extra>
          {dayjs(date).format("DD/MM/YY | HH:mm")}{" "}
          <NextLink href={`/blog/${path}`}>
            <Button floated="right" color="pink">
              Read More
            </Button>
          </NextLink>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};
