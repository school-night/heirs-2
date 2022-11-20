import * as React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Box from "../components/Box";
import theme from "../styles/theme";

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>HEIRS Entertainment</title>
      </Head>
      <Box maxWidth="1400px" margin="0 auto" padding={3} paddingBottom={6}>
        <Navigation />
        {/* <Box marginBottom={6} /> */}
        <Box as="main">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
