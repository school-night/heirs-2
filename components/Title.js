import Box from "./Box";
import Text from "./Text";

const Title = (props) => {
  const { title, subtitle } = props;

  return (
    <Text
      css={{
        textShadow: "0 0 16px black",
        lineHeight: "0.8",
      }}
    >
      {subtitle ? (
        <>
          <Text fontSize={[1, 2]}>{subtitle}</Text>
          <Box />
        </>
      ) : null}
      <Text fontSize={[2, 3]}>{title}</Text>
    </Text>
  );
};

export default Title;
