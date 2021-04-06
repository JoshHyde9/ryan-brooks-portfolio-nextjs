import * as React from "react";
import { BlogItem } from "../Components/BlogItem";
import { Grid, Container } from "semantic-ui-react";
import { getAllPosts } from "util/helpers/helpers";

interface Props {
  posts: [];
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { revalidate: 1, props: { posts } };
}

export const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <Container className="padding">
      <Grid stackable columns={3} padded="horizontally">
        {posts
          ? posts?.map(({ fields }: any, i: number) => {
              return <BlogItem key={i} {...fields} />;
            })
          : "Loading..."}
      </Grid>
    </Container>
  );
};

export default Blog;
