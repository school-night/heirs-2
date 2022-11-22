import Link from "next/link";
import Flexbox from "../../components/Flexbox";
import Grid from "../../components/Grid";
import IndexTitle from "../../components/IndexTitle";
import IndexVideo from "../../components/IndexVideo";
import IndexStill from "../../components/IndexStill";

export const posts = [
  {
    slug: "caddy",
    subtitle: "Benny The Butcher & J. Cole",
    title: "Johnny P’s Caddy",
    assets: [
      {
        type: "video",
        src: "/assets/work/caddy.mp4",
        poster: "/assets/work/caddy_poster.mp4",
      },
      // { type: "video", src: "/assets/work/caddy.jpg" },
    ],
  },
  {
    slug: "me-or-sum",
    subtitle: "Nardo Wick (feat. Future & Lil Baby)",
    title: "Me or Sum",
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

const Page = () => {
  return (
    <Flexbox gap={6} flexDirection="column">
      {posts.map((post, index) => {
        const isRightAligned = index % 2 === 0;

        return (
          <Link
            href={`work/${post.slug}`}
            key={post.slug}
            className="work-grid-item"
          >
            <Grid
              gap={0}
              gridTemplateColumns="repeat(24, 1fr)"
              gridTemplateRows="repeat(10, 1fr)"
            >
              <IndexVideo
                src={`/assets/work/${post.slug}.mp4`}
                poster={`/assets/work/${post.slug}_poster.jpg`}
                isRightAligned={isRightAligned}
              />
              <IndexStill
                src={`/assets/work/${post.slug}.jpg`}
                isRightAligned={isRightAligned}
              />
              <IndexTitle
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
