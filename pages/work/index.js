import Link from "next/link";
import Flexbox from "../../components/Flexbox";
import Grid from "../../components/Grid";
import IndexTitle from "../../components/IndexTitle";
import IndexVideo from "../../components/IndexVideo";
import IndexStill from "../../components/IndexStill";
import posts from "./posts";

const Page = () => {
  return (
    <Flexbox gap={7} flexDirection="column">
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
