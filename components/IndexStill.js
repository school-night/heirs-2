import css from "@styled-system/css";
import Box from "./Box";

const Still = (props) => {
  const { src, isRightAligned } = props;

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
      src={src}
      loading="lazy"
    />
  );
};

export default Still;
