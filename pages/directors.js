import Flexbox from "../components/Flexbox";
import Grid from "../components/Grid";
import Still from "../components/Still";
import StillSmall from "../components/StillSmall";
import Title from "../components/Title";

const posts = [
  { slug: "kasey-elise-walker", title: "Kasey Elise Walker" },
  { slug: "c-prinz", title: "C. Prinz" },
  { slug: "mobolaji-olaoniye", title: "Mobolaji Olaoniye" },
  { slug: "mez", title: "Mez" },
  { slug: "yudai-maruyama", title: "Yudai Maruyama" },
];

const Page = () => {
  return (
    <Flexbox gap={6} flexDirection="column">
      {posts.map((post, index) => {
        const isRightAligned = !(index % 2);

        return (
          <Grid
            key={post.slug}
            gap={0}
            gridTemplateColumns="repeat(24, 1fr)"
            gridTemplateRows="repeat(10, 1fr)"
          >
            <StillSmall
              src={`/assets/directors/${post.slug}_1.jpg`}
              isRightAligned={isRightAligned}
            />
            <Still
              src={`/assets/directors/${post.slug}_2.jpg`}
              isRightAligned={isRightAligned}
            />
            <Title title={post.title} isRightAligned={isRightAligned} />
          </Grid>
        );
      })}
    </Flexbox>
  );
};

export default Page;
