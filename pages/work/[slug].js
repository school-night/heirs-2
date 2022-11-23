import css from "@styled-system/css";
import Link from "next/link";
import Box from "../../components/Box";
import Title from "../../components/Title";
import Flexbox from "../../components/Flexbox";
import { posts } from "./index";

const PostPage = (props) => {
  const { slug } = props;

  const post = posts.find((p) => p.slug === slug);

  // description
  // embed
  // images
  return (
    <Box>
      <Title title={post.title} subtitle={post.subtitle} />
      <Box marginBottom={3} />
      <Box css={{ whiteSpace: "pre-line" }}>{post.description}</Box>
      <Box marginBottom={6} />
      <Flexbox flexDirection="column" gap={6}>
        {post.embed ? (
          <Box
            css={css({
              width: "100%",
              height: "100%",
              display: "flex",
              aspectRatio: "16 / 9",
              "& iframe": {
                width: "100%",
              },
            })}
          >
            {post.embed}
          </Box>
        ) : null}
        {post.images.map((src) => {
          return (
            <Box
              key={src}
              css={css({
                width: "100%",
                height: "100%",
                objectFit: "cover",
              })}
              as="img"
              src={src}
            />
          );
        })}
      </Flexbox>
      <Box marginBottom={6} />
      <Link href="/work">← Back to all projects</Link>
    </Box>
  );
};

export async function getStaticPaths() {
  const paths = posts.map((post) => {
    const { slug } = post;
    return { params: { slug } };
  });

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const { slug } = props.params;
  return {
    props: {
      slug,
    },
  };
}

export default PostPage;
