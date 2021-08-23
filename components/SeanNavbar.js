import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  useColorMode,
  MenuDivider,
  HStack,
  Box,
} from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';
import { signIn, signOut, useSession } from 'next-auth/client';
import { MyButton } from '../styles/theme';
import Star from './Star';

const SeanNavbar = () => {
  const [session, loading] = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: '#1d1d1d',
    dark: '#d400ff',
  };
  const textColor = {
    light: '#1d1d1d',
    dark: '#ffffff',
  };
  const bgColor = {
    light: 'gray.100',
    dark: 'gray.900',
  };
  const menuBgColor = {
    light: 'gray.300',
    dark: 'gray.900',
  };
  return (
    <>
      <Box pt="0px" pl="40px" mt="10px">
        <Menu>
          <MenuButton
            as={IconButton}
            transition="all 0.5s ease-in-out"
            _hover={{
              bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
              color: colorMode === 'dark' ? 'gray.900' : 'gray.50',
              transition: 'all 0.5s ease-in-out',
            }}
            _active={{
              bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
              color: colorMode === 'dark' ? 'gray.900' : 'gray.50',
              transition: 'all 0.5s ease-in-out',
            }}
            boxShadow="md"
            color={iconColor[colorMode]}
            bg={menuBgColor[colorMode]}
            borderColor={iconColor[colorMode]}
            h="50px"
            w="60px"
            fontSize="28px"
            icon={<DragHandleIcon />}
          />
          <MenuList bg={bgColor[colorMode]} w="250px">
            <Box w="200px">
              <MenuGroup color={textColor[colorMode]} title="Profile">
                <MenuItem
                  color={textColor[colorMode]}
                  _focus={{
                    bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
                    color: colorMode === 'dark' ? 'white' : '#d400ff',
                    transition: 'all 0.5s ease-in-out',
                  }}
                  _hover={{
                    bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
                    color: colorMode === 'dark' ? 'white' : '#d400ff',
                    transition: 'all 0.5s ease-in-out',
                  }}
                >
                  My Account
                </MenuItem>
                <MenuItem
                  color={textColor[colorMode]}
                  _focus={{
                    bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
                    color: colorMode === 'dark' ? 'white' : '#d400ff',
                    transition: 'all 0.5s ease-in-out',
                  }}
                  _hover={{
                    bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
                    color: colorMode === 'dark' ? 'white' : '#d400ff',
                    transition: 'all 0.5s ease-in-out',
                  }}
                >
                  Payments{' '}
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup color={textColor[colorMode]} title="Help">
                <MenuItem
                  color={textColor[colorMode]}
                  _focus={{
                    bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
                    color: colorMode === 'dark' ? 'white' : '#d400ff',
                    transition: 'all 0.5s ease-in-out',
                  }}
                  _hover={{
                    bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
                    color: colorMode === 'dark' ? 'white' : '#d400ff',
                    transition: 'all 0.5s ease-in-out',
                  }}
                >
                  Docs
                </MenuItem>
                <MenuItem
                  color={textColor[colorMode]}
                  _focus={{
                    bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
                    color: colorMode === 'dark' ? 'white' : '#d400ff',
                    transition: 'all 0.5s ease-in-out',
                  }}
                  _hover={{
                    bg: colorMode === 'dark' ? '#d400ff' : 'gray.900',
                    color: colorMode === 'dark' ? 'white' : '#d400ff',
                    transition: 'all 0.5s ease-in-out',
                  }}
                >
                  FAQ
                </MenuItem>
              </MenuGroup>
            </Box>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default SeanNavbar;

export const MyTitle = ({ children }) => (
  <Box py="20px">
    <h1 className="logo">
      <a href="#">NextAuth</a>
    </h1>
  </Box>
);
