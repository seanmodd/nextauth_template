import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import {
  SimpleGrid,
  Box,
  Heading,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import SeanNavbar from './SeanNavbar';
import DarkModeSwitch from './DarkModeSwitch';

function LearningNavbar(props) {
  const [session, loading] = useSession();
  const color = useColorModeValue('#ff0000', '#00ff37');
  console.log(
    `Here is the session: ${session} Here is the loading: ${loading}`
  );
  return (
    <>
      <SimpleGrid px="400px" minChildWidth="120px" spacing="40px">
        <Box h="5px">
          <Link href="/learning/">
            <a
              style={{
                color: `${color}`,
                // bg: 'gray.300',
                textShadow: '0px 1px 2px #000000',
              }}
            >
              Learning
            </a>
          </Link>
        </Box>
        <Box h="5px">
          <Link href="/learning/product-list">
            <a>Product List</a>
          </Link>
        </Box>
        <Box h="5px">
          <Link href="/">
            <a />
          </Link>
        </Box>
        <Box h="5px">
          <Link href="/">
            <a />
          </Link>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default LearningNavbar;
