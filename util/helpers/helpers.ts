import { client } from "../contentfulClient";

// get all posts
// @ts-ignore
export const getAllPosts = async () => {
  const entries = await client.getEntries({
    content_type: "ryansblog",
    order: "-fields.date",
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for blog.`);
};

// get a post by slug
// @ts-ignore
export const getPostBySlug = async (path: any) => {
  const entries = await client.getEntries({
    content_type: "ryansblog",
    limit: 1,
    "fields.path[in]": path,
  });
  if (entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for blog`);
};

// get more 3 latest posts
//   @ts-ignore
export const getMorePosts = async (path: any) => {
  const entries = await client.getEntries({
    content_type: "ryansblog",
    limit: 3,
    order: "-fields.date",
    "fields.path[in]": path,
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for blog`);
};

function parsePostSlug({ fields }: any) {
  return {
    path: fields.path,
  };
}

export const parsePostSlugEntries = (entries: any, cb = parsePostSlug) => {
  return entries?.items?.map(cb);
};

// get all slugs of posts
export const getAllPostsWithSlug = async () => {
  const entries = await client.getEntries({
    content_type: "ryansblog",
    select: "fields.path",
  });
  return parsePostSlugEntries(entries, (post) => post.fields);
};
