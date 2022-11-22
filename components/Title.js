import Box from "./Box";
import Text from "./Text";

const Title = (props) => {
  const { title, subtitle, isRightAligned } = props;

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
      <Text
        // lineHeight="120%"
        css={{
          // textShadow: "0px 0px 10px  rgb(0 79 244)",
          textShadow: "0 0 16px black",
        }}
      >
        {subtitle ? (
          <>
            <Text fontSize={1}>{subtitle}</Text>
            <Box />
          </>
        ) : null}
        <Text fontSize={2}>{title}</Text>
      </Text>
    </Box>
  );
};

export default Title;
