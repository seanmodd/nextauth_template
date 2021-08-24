// import { theme as defaultTheme, extendTheme, Button } from '@chakra-ui/react';
// import { createBreakpoints } from '@chakra-ui/theme-tools';

// const breakpoints = createBreakpoints({
//   sm: '425px',
//   md: '768px',
//   lg: '960px',
//   xl: '1280px',
//   '2xl': '1440px',
// });

// const theme = extendTheme({
//   fonts: {
//     heading: `'Inter', ${defaultTheme.fonts.heading}`,
//     body: `'Inter', ${defaultTheme.fonts.body}`,
//   },
//   breakpoints,
// });

// export default theme;
import { mode } from '@chakra-ui/theme-tools';
import {
  extendTheme,
  useColorMode,
  Box,
  useStyleConfig,
} from '@chakra-ui/react';
// import 'typeface-poppins';
import '@fontsource/inter';
import '@fontsource/poppins';

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      h1: {
        textShadow: '-1px 1px 1px #ff00007e',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '4.5rem',
        textAlign: 'center',
        color: props.colorMode === 'dark' ? 'red.400' : '#ff00ea',
        transition: 'all 0.1s ease-in-out',
        fontWeight: 'semibold',
        letterSpacing: '-0.02em',
        lineHeight: '1.5',
        padding: '0 1rem',
        textShadow:
          props.colorMode === 'dark' ? '2px 1px red' : '0px 1px#0000006c',
        _hover: {
          letterSpacing: '0.05em',
        },
      },

      body: {
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        transition: 'all 0.1s ease-in-out',
      },
      input: {
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        boxShadow: 'md',
        margin: '10px',
        padding: '10px',
        border:
          props.colorMode === 'dark'
            ? '0.1px solid #88888886'
            : '0.1px solid #f0121285',
        transition: 'all 0.1s ease-in-out',
        borderRadius: '5px',
        _hover: {
          transition: 'ease-in-out, width .35s ease-in-out',
          backgroundColor: props.colorMode === 'dark' ? 'gray.700' : 'blue.50',
          boxShadow:
            props.colorMode === 'dark'
              ? '0 0 1px 1px #dee4ef'
              : '0 0 2px 4px #dee4ef',
        },
        _focus: {
          transition: 'all 0.1s ease-in-out',
        },
      },
      div: {
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        transition: 'all 0.1s ease-in-out',
      },
      a: {
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
        fontWeight: '200',
        transition: 'all 0.5s ease-in-out',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: props.colorMode === 'dark' ? 'blue.400' : '#ff00ea',
        textDecoration: 'underline',
        _hover: {
          textShadow: '-1px 1px 5px #30303029',
          color: props.colorMode === 'dark' ? '#ff00ea' : 'blue.400',
          transition: 'all 0.5s ease-in-out',
        },
      },
      button: {
        px: '4',
        py: '3',
        m: '2',
        textAlign: 'center',
        // bg: 'gray.700',
        // color: 'blue.50',
        bg: props.colorMode === 'dark' ? 'gray.300' : 'gray.300',
        // boxShadow: '3px 3px 2px 1px rgba(0, 0, 255, .2);',
        boxShadow:
          props.colorMode === 'dark'
            ? '1px 1px 1px 1px #aaaaaa47;'
            : '1px 1px 1px 1px #0000ff0;',
        color: props.colorMode === 'dark' ? '#6f00ff' : '#6f00ff',
        fontWeight: 'normal',
        // textShadow: '1px 1px 0.2px rgba(0, 0, 255, .2);',
        // borderWidth: '1px',
        borderRadius: '10px',
        transition: 'all 0.5s ease-in-out',
        // borderColor: 'gray.700',
        _hover: {
          // borderColor: '#0022e4',
          // bg: 'purple.400',
          transition: 'all 0.5s ease-in-out',
          color: props.colorMode === 'dark' ? '#ff00ea' : '#ff00ea',
          fontWeight: 'bold',
          fontSize: '18px',
          // boxShadow:
          //   props.colorMode === 'dark'
          //     ? '2px 2px 2px 1px #aaaaaaca;'
          //     : '3px 3px 2px 1px rgba(0, 0, 255, .2);',

          // textShadow: '0 3px 0 #a0a0a07e',
          // borderRadius: '7.5px',
          // borderColor: '#0022e4',
        },
        transition: 'all 0.5s ease-in-out',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontFamily: 'Poppins, sans-serif',
        // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
      },
      variants: {
        'with-shadow': {
          // bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props) => ({
          bg: mode('blue.500', 'red.500')(props),
          // bg: 'gray.300',
          color: props.colorMode === 'dark' ? 'red.500' : 'blue.800',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
            bg: 'gray.300',
            textShadow: '0 3px 0 #a0a0a07e',
            // borderRadius: '15px',
          },
        }),
      },
    },
    Text: {
      baseStyle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: '1.5',
        fontFamily: 'Poppins, sans-serif',
        // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
      },
      variants: {
        'with-shadow': {
          // bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props) => ({
          bg: mode('blue.500', 'red.500')(props),
          // bg: 'gray.300',
          color: props.colorMode === 'dark' ? 'red.500' : 'blue.800',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
            bg: 'gray.300',
            textShadow: '0 3px 0 #a0a0a07e',
            // borderRadius: '15px',
          },
        }),
      },
    },
    Drawer: {
      // setup light/dark mode component defaults
      baseStyle: (props) => ({
        dialog: {
          bg: mode('red.500', 'blue.500')(props),
        },
      }),
    },
    // Text: {
    //   // setup light/dark mode component defaults
    //   baseStyle: (props) => ({
    //     bg: mode('red.500', 'blue.500')(props),
    //   }),
    // },

    Button: {
      baseStyle: {
        fontWeight: 'normal',
        // borderColor: '#ff0000',
        bg: 'gray.50',
        textShadow: '0 3px 0 #a0a0a07e',
        // borderWidth: '2px',
        // borderRadius: '15px',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
        lg: {
          h: '48px',
          fontSize: 'lg',
          px: '24px',
        },
        md: {
          h: '40px',
          fontSize: 'lg',
          px: '20px',
        },
        sm: {
          h: '32px',
          fontSize: 'lg',
          px: '16px',
        },
        xs: {
          h: '28px',
          fontSize: 'lg',
          px: '14px',
        },
      },
      variants: {
        'with-shadow': {
          // bg: 'red.400',
          // boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props) => ({
          // bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
          bg: 'gray.300',
          // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.800',
          _hover: {
            // bg: props.colorMode === 'dark' ? 'blue.500' : 'red.500',
            bg: 'gray.300',
            textShadow: '0 3px 0 #a0a0a07e',
            // borderRadius: '15px',
          },
        }),
      },
    },
  },
});
