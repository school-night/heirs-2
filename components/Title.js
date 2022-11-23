import css from "@styled-system/css";
import Box from "./Box";
import Text from "./Text";

const Title = (props) => {
  const { title, subtitle } = props;

  return (
    <Text
      css={css({
        textShadow: "0 4px 12px rgba(0,0,0,.4)",
        lineHeight: "0.8",
        color: "foreground",
      })}
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
