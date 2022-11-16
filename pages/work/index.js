import Link from "next/link";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Flexbox from "../../components/Flexbox";
import Grid from "../../components/Grid";

const posts = [
  {
    slug: "caddy",
    subtitle: "Benny The Butcher & J. Cole",
    title: "Johnny P's Caddy",
  },
  {
    slug: "me-or-sum",
    subtitle: "Nardo Wick",
    title: "Me or Sum (feat. Future & Lil Baby)",
  },
  {
    slug: "headshots",
    subtitle: "Isaiah Rashad",
    title: "Headshots (4r Da Locals)",
  },
  { slug: "amari", subtitle: "J. Cole", title: "a m a r i" },
  { slug: "air-max", subtitle: "Nike", title: "Nike Air Max Day 2021" },
  {
    slug: "rs-dreamer-2",
    subtitle: "PUMA & J. Cole",
    title: "PUMA RS Dreamer 2",
  },
  { slug: "middle-child", subtitle: "J. Cole", title: "Middle Child" },
  { slug: "mood", subtitle: "SiR", title: "Mood" },
  { slug: "loading", subtitle: "Mez", title: "Loading" },
  { slug: "rs-dreamer", subtitle: "PUMA & J. Cole", title: "PUMA RS Dreamer" },
  { slug: "southside-mez", subtitle: "Mez", title: "Southside Mez" },
];

const Title = (props) => {
  const { title, subtitle } = props;

  return (
    <Box css={{ gridColumn: "2 / span 24", gridRow: "1 / span 3" }}>
      <Text>{subtitle}</Text>
      <Box />
      <Text>{title}</Text>
    </Box>
  );
};

const Still = (props) => {
  const { slug } = props;

  return (
    <Box
      css={{
        gridColumn: "1 / span 14",
        gridRow: "1 / span 7",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      as="img"
      src={`/assets/${slug}.jpg`}
    />
  );
};

const Video = (props) => {
  const { slug } = props;

  return (
    <Box
      css={{
        gridColumn: "9 / span 16",
        gridRow: "6 / span 5",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      as="video"
      src={`/assets/${slug}.mp4`}
      poster={`/assets/${slug}_poster.jpg`}
      loop
      muted
      autoPlay
      playsInline
    />
  );
};

const Page = () => {
  return (
    <Flexbox gap={5} flexDirection="column">
      {posts.map((post) => {
        // return post.slug;
        return (
          <Link href={`work/${post.slug}`} key={post.slug}>
            <Grid
              gap={5}
              gridTemplateColumns="repeat(24, 1fr)"
              gridTemplateRows="repeat(10, 1fr)"
            >
              <Still slug={post.slug} />
              <Video slug={post.slug} />
              <Title title={post.title} subtitle={post.subtitle} />
            </Grid>
          </Link>
        );
      })}
    </Flexbox>
  );
};

export default Page;
