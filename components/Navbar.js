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
      {/* <nav className="header"> */}

      <nav className="main-nav">
        <SimpleGrid px="200px" minChildWidth="120px" spacing="40px">
          <Box>
            <DarkModeSwitch />
          </Box>
          <Box h="10px">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Box>
          <Box h="10px">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </Box>
          <Box h="10px">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </Box>
          <Box h="10px">
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

          <SeanNavbar />
        </SimpleGrid>
      </nav>
    </>
  );
}

export default Navbar;
