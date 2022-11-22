import Box from "./Box";
import Title from "./Title";

const IndexTitle = (props) => {
  const { title, subtitle, isRightAligned, color } = props;

  return (
    <Box
      css={{
        ...(isRightAligned
          ? {
              gridColumn: "1 / span 24",
              gridRow: "2 / span 4",
              textAlign: "right",
            }
          : {
              gridColumn: "1 / span 24",
              gridRow: "6 / span 4",
              alignSelf: "end",
            }),
      }}
    >
      <Title title={title} subtitle={subtitle} color={color} />
    </Box>
  );
};

export default IndexTitle;
