import css from "@styled-system/css";
import Box from "./Box";

const StillSmall = (props) => {
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
              gridColumn: "9 / span 16",
              gridRow: "6 / span 5",
            }
          : {
              gridColumn: "1 / span 16",
              gridRow: "1 / span 5",
            }),
      })}
      as="img"
      src={src}
      loading="lazy"
    />
  );
};

export default StillSmall;
