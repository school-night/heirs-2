import css from "@styled-system/css";
import Link from "next/link";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Flexbox from "../../components/Flexbox";
import Grid from "../../components/Grid";

const posts = [
  {
    slug: "caddy",
    subtitle: "Benny The Butcher & J. Cole",
    title: "Johnny P’s Caddy",
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
  const { title, subtitle, isRightAligned } = props;

  return (
    <Box
      css={{
        ...(isRightAligned
          ? {
              gridColumn: "1 / span 24",
              gridRow: "2 / span 3",
              textAlign: "right",
            }
          : {
              gridColumn: "1 / span 24",
              gridRow: "7 / span 3",
              alignSelf: "end",
            }),
      }}
    >
      <Text
        lineHeight={1}
        css={{
          // textShadow: "0px 0px 10px  rgb(0 79 244)",
          textShadow: "0 0 16px black",
        }}
      >
        <Text fontSize={1}>{subtitle}</Text>
        <Box />
        <Text fontSize={2}>{title}</Text>
      </Text>
    </Box>
  );
};

const Still = (props) => {
  const { slug, isRightAligned } = props;

  return (
    <Box
      css={css({
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 3,
        ...(isRightAligned
          ? {
              gridColumn: "1 / span 14",
              gridRow: "1 / span 7",
            }
          : {
              gridColumn: "11 / span 14",
              gridRow: "4 / span 7",
            }),
      })}
      as="img"
      src={`/assets/${slug}.jpg`}
    />
  );
};

const Video = (props) => {
  const { slug, isRightAligned } = props;

  return (
    <Box
      css={css({
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 3,
        ...(isRightAligned
          ? {
              gridColumn: "9 / span 16",
              gridRow: "6 / span 5",
            }
          : {
              gridColumn: "1 / span 16",
              gridRow: "1 / span 5",
            }),
      })}
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
    <Flexbox gap={6} flexDirection="column">
      {posts.map((post, index) => {
        const isRightAligned = !(index % 2);

        return (
          <Link
            href={`work/${post.slug}`}
            key={post.slug}
            className="work-grid-item"
            // css={css({
            //   transition: "0.2s all",
            //   "&:hover": {
            //     transform: ["scale(0.98)", "scale(1.04)"],
            //   },
            // })}
          >
            <Grid
              gap={0}
              gridTemplateColumns="repeat(24, 1fr)"
              gridTemplateRows="repeat(10, 1fr)"
            >
              <Still slug={post.slug} isRightAligned={isRightAligned} />
              <Video slug={post.slug} isRightAligned={isRightAligned} />
              <Title
                title={post.title}
                subtitle={post.subtitle}
                isRightAligned={isRightAligned}
              />
            </Grid>
          </Link>
        );
      })}
    </Flexbox>
  );
};

export default Page;
