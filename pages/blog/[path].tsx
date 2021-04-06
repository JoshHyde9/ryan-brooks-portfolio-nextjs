import * as React from "react";
import NextLink from "next/link";
import dayjs from "dayjs";
import Markdown from "react-markdown";

// Styles
import {
  Container,
  Grid,
  Header,
  Image,
  Divider,
  Button,
} from "semantic-ui-react";
import {
  getAllPostsWithSlug,
  getMorePosts,
  getPostBySlug,
} from "util/helpers/helpers";

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ path }: any) => `/blog/${path}`) ?? [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getPostBySlug(params.path);
  const morePosts = await getMorePosts(params.path);
  return {
    props: {
      post: post ? post : null,
      morePosts: morePosts ? morePosts : null,
    },
    revalidate: 1,
  };
};

interface Props {
  post: {
    fields: {
      title: string;
      content: string;
      icon: string;
      date: string;
    };
  };
}

export const BlogPost: React.FC<Props> = ({ post }) => {
  return (
    <>
      <Grid container stackable verticalAlign="middle" className="padding">
        <Grid.Row>
          <Grid.Column width={12}>
            <Header as="h1">{post?.fields.title}</Header>
            <Markdown source={post?.fields.content} />
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src={post?.fields.icon}></Image>
          </Grid.Column>
        </Grid.Row>
        <Divider />
      </Grid>
      <Container>
        <p>{dayjs(post?.fields.date).format("DD/MM/YYYY | HH:mm")}</p>
        <NextLink href="/blog">
          <Button floated="right" color="pink">
            Back
          </Button>
        </NextLink>
      </Container>
    </>
  );
};

export default BlogPost;
