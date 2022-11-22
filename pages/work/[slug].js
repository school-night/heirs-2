import Box from "../../components/Box";
import Title from "../../components/Title";
import { posts } from "./index";

const PostPage = (props) => {
  const { slug } = props;

  const post = posts.find((p) => p.slug === slug);

  return (
    <Box>
      <Title title={post.title} subtitle={post.subtitle} />
      <Box marginBottom={6} />
      {/* {post.assets.map((asset) => {
        const { type, src, poster = "" } = asset;
        return (
          <Box
            css={css({
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 3,
            })}
            as={type}
            src={src} // poster={poster}
            controls={type === "video"}
          />
        );
      })} */}
    </Box>
  );
};

export async function getStaticPaths() {
  const paths = posts.map((post) => {
    const { slug } = post;
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const { slug } = props.params;
  // console.log(post);

  return {
    props: {
      slug,
    },
  };
}

export default PostPage;
