import Link from "next/link";
import css from "@styled-system/css";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";

const collaborators = [
  {
    href: "http://www.dreamville.com/",
    src: "assets/logo-dreamville.png",
    alt: "Dreamville",
  },
  { href: "https://txdxe.com/", src: "assets/logo-tde.png", alt: "TDE" },
  { href: "http://puma.com/", src: "assets/logo-puma.svg", alt: "Puma" },
  { href: "http://nike.com/", src: "assets/logo-nike.svg", alt: "Nike" },
];

const Page = () => {
  return (
    <Box>
      <Box
        css={css({
          maxWidth: "47ch",
          margin: "0 auto",
          textAlign: "justify",
          color: "foreground",
        })}
      >
        HEIRS Entertainment is our Black-owned mixed media vernacular of choice
        for pain and struggle. For our love and happiness. We had to learn to
        choose our heirlooms. Most of mine were detrimental, so I formed what I
        would manifest from my imagination, rather than what was laid before me.
        We will continue to tell our story through visuals, production, and
        fashion. We’d also love to tell yours.
        <br />
        <br />
        Love.
        <br />
        <br />
        &mdash; Morris
      </Box>
      <Box marginBottom={5} />
      <Box
        css={{
          textAlign: "center",
        }}
      >
        Collaborators
      </Box>
      <Box marginBottom={4} />
      <Box maxWidth="600px" margin="0 auto">
        <Flexbox gap={3} alignItems="center" justifyContent="center">
          {collaborators.map((collaborator) => {
            return (
              <Link href={collaborator.href} key={collaborator.href}>
                <Box
                  src={collaborator.src}
                  alt={collaborator.alt}
                  as="img"
                  height={4}
                  loading="lazy"
                />
              </Link>
            );
          })}
        </Flexbox>
      </Box>
    </Box>
  );
};

export default Page;
