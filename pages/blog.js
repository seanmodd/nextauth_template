import { useState, useEffect } from 'react';
import { getSession, useSession } from 'next-auth/client';

const { Heading, VStack } = require('@chakra-ui/react');

function Blog({ data }) {
  const [loading, setLoading] = useState(true);
  const [session] = useSession();
  console.log({ session });
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      console.log({ session });
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return (
      <VStack pt="100px">
        <Heading className="title">Loading...</Heading>
      </VStack>
    );
  }

  return (
    <VStack pt="100px">
      <Heading className="title" py="20px">
        Blog Page!
      </Heading>
      <Heading fontSize="2xl">{data}</Heading>
      <Heading fontSize="2xl">Owner: {session.user.name}</Heading>
    </VStack>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: 'List of 100 Blog Titles',
      session,
    },
  };
}
