import { useRouter } from 'next/router';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import {
  SimpleGrid,
  Box,
  Text,
  Heading,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { useState } from 'react';
import SeanNavbar from './SeanNavbar';
import DarkModeSwitch from './DarkModeSwitch';

function LearningNavbar(props) {
  const [session, loading] = useSession();
  const [clicked, setClicked] = useState(false);
  const { asPath, pathname } = useRouter();
  console.log(asPath);
  const clickHandler = () => {
    if (asPath === '/learning/product-list') {
      console.log('TRUEEE!');
      setClicked(false);
      console.log('TRUEEEEE!');
    } else {
      console.log('WRONGGGGG!');
      setClicked(true);
      console.log('WRONGGGGG!');
    }
  };

  const StrikedText = ({ children }) => (
    <Text fontSize="15px" textDecoration="line-through">
      {children}
    </Text>
  );
  const NotStriked = ({ children }) => <Text fontSize="15px">{children}</Text>;

  const color = useColorModeValue('#ff0000', '#00ff37');

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
            <a onClick={clickHandler}>
              {clicked ? (
                <StrikedText>Product List</StrikedText>
              ) : (
                <NotStriked>Product List</NotStriked>
              )}
            </a>
          </Link>
        </Box>
        <Box h="5px">
          <Link href="/learning/nested-dynamic">
            <a onClick={() => setClicked(false)}>Nested Dynamic</a>
          </Link>
        </Box>
        <Box h="5px">
          <Link href="/learning/catch-all">
            <a onClick={() => setClicked(false)}>Catch All Routes</a>
          </Link>
        </Box>
        <Box h="5px">
          <Link href="/learning/navigating-programatically">
            <a onClick={() => setClicked(false)}>Navigating Programatically</a>
          </Link>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default LearningNavbar;
