import 'semantic-ui-css/semantic.min.css';
import { DefaultSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import {
  Box,
  ChakraProvider,
  Grid,
  SimpleGrid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import SEO from 'next-seo.config';
import { theme, myTheme } from 'styles/theme';
// import GlobalStyle from 'styles/styles';
import 'styles/css/nprogress.css';
import '../styles/Navbar.css';
import Star from 'components/Star';
import Navbar from 'components/Navbar';
import { Provider } from 'next-auth/client';
import DarkModeSwitch from 'components/DarkModeSwitch';
import SeanNavbar, { MyTitle } from '../components/SeanNavbar';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider session={pageProps.sesson}>
        <DefaultSeo {...SEO} />
        <CssBaseline />
        {/* <GlobalStyle> */}
        <MyTitle />
        <Navbar />
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              scale: 1.2,
              opacity: 0,
            },
            pageAnimate: {
              scale: 1,
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
        {/* </GlobalStyle> */}
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
