import css from "@styled-system/css";
import Box from "./Box";

const Video = (props) => {
  const { src, poster, isRightAligned } = props;

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
      src={src}
      poster={poster}
      loop
      muted
      autoPlay
      playsInline
    />
  );
};

export default Video;

// const Video = (props) => {
//   return (
//     <video loop muted autoPlay playsInline>
//       <source src={props.source} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   );
// };
