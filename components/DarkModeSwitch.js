// import { useColorMode, IconButton } from '@chakra-ui/core';
import {
  useColorMode,
  IconButton,
  Button,
  HStack,
  Flex,
  Stack,
  Box,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: '#1d1d1d',
    dark: '#ffe600',
  };
  const bgColor = {
    light: 'gray.300',
    dark: 'gray.900',
  };
  const borderColor = {
    light: 'gray.900',
    dark: '#ffe600',
  };
  return (
    <>
      <HStack align="center" justify="center">
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          bg={bgColor[colorMode]}
          borderColor={borderColor[colorMode]}
          _hover={{
            bg: colorMode === 'dark' ? '#ffe600' : 'gray.900',
            color: colorMode === 'dark' ? 'gray.900' : 'gray.50',
          }}
        >
          {children}
        </IconButton>
      </HStack>
    </>
  );
};

export default DarkModeSwitch;
