import css from "@styled-system/css";
import Flexbox from "../components/Flexbox";
import Grid from "../components/Grid";
import IndexStill from "../components/IndexStill";
import IndexStillSmall from "../components/IndexStillSmall";
import IndexTitle from "../components/IndexTitle";

const posts = [
  { slug: "kasey-elise-walker", title: "Kasey Elise Walker" },
  { slug: "c-prinz", title: "C. Prinz" },
  { slug: "mobolaji-olaoniye", title: "Mobolaji Olaoniye" },
  { slug: "mez", title: "Mez" },
  { slug: "yudai-maruyama", title: "Yudai Maruyama" },
];

const Page = () => {
  return (
    <Flexbox gap={7} flexDirection="column">
      {posts.map((post, index) => {
        const isRightAligned = !(index % 2);

        return (
          <Grid
            key={post.slug}
            gap={0}
            gridTemplateColumns="repeat(24, 1fr)"
            gridTemplateRows="repeat(10, 1fr)"
            css={css({
              "& img": {
                transition: "all 0.2s",
              },
              "&:not(:hover) img:nth-child(2)": {
                transform: isRightAligned
                  ? [, "translateX(50px) translateY(50px)"]
                  : [, "translateX(-50px) translateY(-50px)"],
              },
              "&:not(:hover) img:nth-child(1)": {
                transform: isRightAligned
                  ? [, "translateX(-50px) translateY(-50px)"]
                  : [, "translateX(50px) translateY(50px)"],
              },
            })}
          >
            <IndexStillSmall
              src={`/assets/directors/${post.slug}_1.jpg`}
              isRightAligned={isRightAligned}
            />
            <IndexStill
              src={`/assets/directors/${post.slug}_2.jpg`}
              isRightAligned={isRightAligned}
            />
            <IndexTitle title={post.title} isRightAligned={isRightAligned} />
          </Grid>
        );
      })}
    </Flexbox>
  );
};

export default Page;
