import Router from 'next/router';
import NProgress from 'nprogress';
import 'semantic-ui-css/semantic.min.css';
import { DefaultSeo } from 'next-seo';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

import SEO from 'next-seo.config';
import theme from 'styles/theme';
import GlobalStyle from 'styles/styles';
import 'styles/css/nprogress.css';
import '../styles/Navbar.css';
import Star from 'components/Star';
import Navbar from 'components/Navbar';
import { Provider } from 'next-auth/client';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider session={pageProps.sesson}>
        <DefaultSeo {...SEO} />
        <GlobalStyle>
          <Star />
          <AnimatePresence exitBeforeEnter>
            {/* <MotionBox
              key={router.route}
              animate="enter"
              as="main"
              exit="exit"
              flexGrow={1}
              initial="initial"
              variants={{
                initial: { opacity: 0, y: -10 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
              }}
            > */}
            <Navbar />
            <Component {...pageProps} />
            {/* </MotionBox> */}
          </AnimatePresence>
        </GlobalStyle>
      </Provider>
    </ChakraProvider>
  );
}
// function MyApp({ Component, pageProps, router }) {
//   return (
//     <ChakraProvider resetCSS theme={theme}>
//       <Provider session={pageProps.sesson}>
//         <DefaultSeo {...SEO} />

//         <GlobalStyle>
//           <Star />
//           <AnimatePresence exitBeforeEnter>
//             <MotionBox
//               key={router.route}
//               animate="enter"
//               as="main"
//               exit="exit"
//               flexGrow={1}
//               initial="initial"
//               variants={{
//                 initial: { opacity: 0, y: -10 },
//                 enter: { opacity: 1, y: 0 },
//                 exit: { opacity: 0, y: 10 },
//               }}
//             >
//               <Navbar />
//               <Component {...pageProps} />
//             </MotionBox>
//           </AnimatePresence>
//         </GlobalStyle>
//       </Provider>
//     </ChakraProvider>
//   );
// }

export default MyApp;
