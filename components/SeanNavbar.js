import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  Button,
  MenuGroup,
  MenuOptionGroup,
  IconButton,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  HStack,
  Box,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  UpDownIcon,
  ViewIcon,
  DragHandleIcon,
  ArrowUpDownIcon,
  AddIcon,
} from '@chakra-ui/icons';
import { signIn, signOut, useSession } from 'next-auth/client';
import { MyButton } from '../styles/theme';
import Star from './Star';

const SeanNavbar = () => {
  const [session, loading] = useSession();
  return (
    <HStack justify="space-between" align="top" h="100px" pl="100px">
      <HStack justify="space-between" w="100%" pr="530px">
        <Box pt="0px" pl="40px" mt="190px">
          <Menu>
            <MenuButton
              as={IconButton}
              boxShadow="md"
              h="50px"
              w="60px"
              fontSize="28px"
              icon={<DragHandleIcon />}
            />
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
        <Box pt="20px">
          <h1 className="logo">
            <a href="#">NextAuth</a>
          </h1>
        </Box>
      </HStack>
      <Star />
    </HStack>
  );
};

export default SeanNavbar;
