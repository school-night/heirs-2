import * as React from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Box from "../components/Box";
import theme from "../styles/theme";

const App = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>HEIRS Entertainment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content="https://heirs.us/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HEIRS Entertainment" />
        <meta property="og:description" content="HEIRS Entertainment is our black-owned mixed media vernacular of choice for pain and struggle." />
        <meta property="og:image" content="./assets/work/southside-mez.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box maxWidth="1400px" margin="0 auto" padding={3} paddingBottom={6}>
        <Navigation />
        <Box as="main">
          <Component {...pageProps} />
        </Box>
        {currentPath === "/" ? null : <Footer />}
      </Box>
    </ThemeProvider>
  );
};

export default App;
