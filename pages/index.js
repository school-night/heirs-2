// import Text from "../components/Text";
import css from "@styled-system/css";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";

// the '?h=' is a hash value because this video is private.
// they need to make it public for us to be able to cleanly embed it and do things like '?title=0'.
// vimeo embed options: https://developer.vimeo.com/player/sdk/embed

const Index = () => {
  return (
    <Flexbox flexDirection="column">
      <Box
        css={css({
          width: "100%",
          height: "100%",
          display: "flex",
          aspectRatio: "16 / 9",
        })}>
        <iframe
          title="vimeo-player" src="https://player.vimeo.com/video/754560721?h=6427b90bf1" width="100%" height="100%" frameborder="0">
        </iframe >
      </Box>
    </Flexbox>
    //   <Box>
    //   <Text color="foregroundDark">HEIRS Entertainment</Text>
    // </Box>
  );
};

export default Index;
