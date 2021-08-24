import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import { SimpleGrid, Box, Heading, GridItem } from '@chakra-ui/react';
import SeanNavbar from './SeanNavbar';
import DarkModeSwitch from './DarkModeSwitch';
import LearningNavbar from './LearningNavbar';

function Navbar() {
  const [session, loading] = useSession();
  console.log(
    `Here is the session: ${session} Here is the loading: ${loading}`
  );
  return (
    <>
      {/* <nav className="header"> */}

      <nav className="main-nav">
        <SimpleGrid px="600px" pb="10px" minChildWidth="40px" spacing="20px">
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
        <LearningNavbar />
      </nav>
    </>
  );
}

export default Navbar;
