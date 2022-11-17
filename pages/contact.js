import Link from "next/link";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";
import Text from "../components/Text";

const items = [
  {
    href: "mailto:tapin@heirs.us",
    title: "Email",
  },
  {
    href: "https://www.instagram.com/heirsentertainment",
    title: "Instagram",
  },
  {
    href: "https://twitter.com/heirsent",
    title: "Twitter",
  },
];
const Page = () => {
  return (
    <Box css={{ textAlign: "center" }}>
      <Text>Contact us</Text>
      <Box marginBottom={5} />
      <Flexbox flexDirection="column" gap={4} css={{ display: "inline-flex" }}>
        {items.map((item) => {
          return (
            <Link href={item.href} key={item.href} target="_blank">
              {item.title}
            </Link>
          );
        })}
      </Flexbox>
    </Box>
  );
};

export default Page;
