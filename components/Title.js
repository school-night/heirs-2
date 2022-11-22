import Box from "./Box";
import Text from "./Text";

const Title = (props) => {
  const { title, subtitle, isRightAligned } = props;

  return (
    <Text
      css={{
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
  );
};

export default Title;
