import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import { SimpleGrid, Box, Heading, GridItem } from '@chakra-ui/react';
import SeanNavbar from './SeanNavbar';
import DarkModeSwitch from './DarkModeSwitch';

function Navbar() {
  const [session, loading] = useSession();
  console.log(
    `Here is the session: ${session} Here is the loading: ${loading}`
  );
  return (
    <>
      <nav className="main-nav">
        <SimpleGrid
          justifyContent="center"
          alignItems="center"
          px="300px"
          pb="0px"
          minChildWidth="160px"
          spacing="0px"
        >
          <Box h="45px">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Box>
          <Box h="45px">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </Box>
          <Box h="45px">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </Box>
          <Box h="45px">
            <Link href="/learning">
              <a>Example Page</a>
            </Link>
          </Box>
          <Box h="45px">
            {!loading && !session && (
              <Link href="/api/auth/signin">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signIn('github');
                  }}
                >
                  Sign In
                </a>
              </Link>
            )}
            {session && (
              <Link href="/api/auth/signout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign Out
                </a>
              </Link>
            )}
          </Box>
        </SimpleGrid>
      </nav>
    </>
  );
}

export default Navbar;
