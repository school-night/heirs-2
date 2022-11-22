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
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "me-or-sum",
    subtitle: "Nardo Wick (feat. Future & Lil Baby)",
    title: "Me or Sum",
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "headshots",
    subtitle: "Isaiah Rashad",
    title: "Headshots (4r Da Locals)",
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "amari",
    subtitle: "J. Cole",
    title: "a m a r i",
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "air-max",
    subtitle: "Nike",
    title: "Nike Air Max Day 2021",
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "rs-dreamer-2",
    subtitle: "PUMA & J. Cole",
    title: "PUMA RS Dreamer 2",
    description:
      "Photography, Videography, and Creation Direction by Mez for HEIRS Entertainment\nProduced by HEIRS Entertainment and AJR Films",
    embed: (
      <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/mMZIPXw4Khc?rel=0&modestbranding=1"
        allowfullscreen
      ></iframe>
    ),
    images: [
      "/assets/work/rs-dreamer-2_6.jpg",
      "/assets/work/rs-dreamer-2_7.jpg",
      "/assets/work/rs-dreamer-2_8.jpg",
      "/assets/work/rs-dreamer-2_1.jpg",
      "/assets/work/rs-dreamer-2_2.jpg",
      "/assets/work/rs-dreamer-2_3.jpg",
      "/assets/work/rs-dreamer-2_4.jpg",
      "/assets/work/rs-dreamer-2_5.jpg",
    ],
  },
  {
    slug: "middle-child",
    subtitle: "J. Cole",
    title: "Middle Child",
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "mood",
    subtitle: "SiR",
    title: "Mood",
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "loading",
    subtitle: "Mez",
    title: "Loading",
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "rs-dreamer",
    subtitle: "PUMA & J. Cole",
    title: "PUMA RS Dreamer",
    description: "",
    embed: null,
    images: [],
  },
  {
    slug: "southside-mez",
    subtitle: "Mez",
    title: "Southside Mez",
    description: "",
    embed: null,
    images: [],
  },
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
