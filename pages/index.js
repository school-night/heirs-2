import css from "@styled-system/css";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";

const Index = () => {
  return (
    <Flexbox flexDirection="column">
      <Box
        css={css({
          width: "100%",
          height: "100%",
          display: "flex",
          aspectRatio: "16 / 9",
        })}
      >
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/754560721?h=6427b90bf1&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Flexbox>
  );
};

export default Index;
