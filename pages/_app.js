import 'semantic-ui-css/semantic.min.css';
import { DefaultSeo } from 'next-seo';
import { Box, ChakraProvider } from '@chakra-ui/react';
import SEO from 'next-seo.config';
import theme from 'styles/theme';
// import GlobalStyle from 'styles/styles';
import 'styles/css/nprogress.css';
import '../styles/Navbar.css';
import Star from 'components/Star';
import Navbar from 'components/Navbar';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider session={pageProps.sesson}>
        <DefaultSeo {...SEO} />
        {/* <GlobalStyle> */}
        <Star />
        <Navbar />
        <Component {...pageProps} />
        {/* </GlobalStyle> */}
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
