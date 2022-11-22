import Box from "../../components/Box";

const meta = {
  slug: "caddy",
  subtitle: "Benny The Butcher & J. Cole",
  title: "Johnny P’s Caddy",
};

const Page = (props) => {
  return (
    <Box>
      <Text>{subtitle}</Text>
      <Box />
      <Text>{title}</Text>
      <Box marginBottom={6} />
      <Video src=""></Video>
    </Box>
  );
};

export default Page;
