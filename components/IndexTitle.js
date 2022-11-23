import Box from "./Box";
import Title from "./Title";

const IndexTitle = (props) => {
  const { title, subtitle, isRightAligned } = props;

  return (
    <Box
      css={{
        position: "relative",
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
      <Title title={title} subtitle={subtitle} />
    </Box>
  );
};

export default IndexTitle;
