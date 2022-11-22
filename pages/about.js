import css from "@styled-system/css";
import Box from "../components/Box";

const Page = () => {
  return (
    <Box>
      <Box
        css={css({
          maxWidth: "47ch",
          margin: "0 auto",
          textAlign: "justify",
          color: "foreground",
        })}
      >
        HEIRS Entertainment is our Black-owned mixed media vernacular of choice
        for pain and struggle. For our love and happiness. We had to learn to
        choose our heirlooms. Most of mine were detrimental, so I formed what I
        would manifest from my imagination, rather than what was laid before me.
        We will continue to tell our story through visuals, production, and
        fashion. We’d also love to tell yours.
        <br />
        <br />
        Love.
        <br />
        <br />
        &mdash; Morris
      </Box>
    </Box>
  );
};

export default Page;
