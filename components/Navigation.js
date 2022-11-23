import { useRouter } from "next/router";
import Link from "next/link";
import Box from "../components/Box";
import Text from "../components/Text";
import Flexbox from "../components/Flexbox";

const paths = ["/work", "/about", "/contact", "/directors", "/shop"];

const Navigation = () => {
  const router = useRouter();

  return (
    <Box as="nav" paddingBottom={6}>
      <Flexbox justifyContent="space-between" gap={3} flexWrap="wrap">
        <Box as="a" href="/">
          <Box as="img" src="/assets/logo-heirs-sm.svg" height={4} />
        </Box>
        <Flexbox alignItems="center" gap={3} flexWrap="wrap">
          {paths.map((path) => {
            const currentPath = router.asPath;
            const currentPathParts = currentPath.split("/");
            const pathname = path.replace("/", "");
            const href =
              path === "/shop"
                ? "https://heirs-entertainment.myshopify.com/"
                : path;
            const target = path === "/shop" ? "_blank" : null;

            const isCurrentPath = currentPath === path;
            const isNestedPath = currentPathParts[1] === pathname;
            const isCurrent = isCurrentPath || isNestedPath;

            return (
              <Link href={href} key={path} target={target}>
                <Text color={isCurrent ? "middle" : null}>{pathname}</Text>
              </Link>
            );
          })}
        </Flexbox>
      </Flexbox>
    </Box>
  );
};

export default Navigation;
