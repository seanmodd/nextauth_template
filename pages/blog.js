import { getSession, useSession } from 'next-auth/client';

const { Heading, VStack } = require('@chakra-ui/react');

function Blog({ data }) {
  const [session] = useSession();
  console.log({ session });

  return (
    <VStack pt="100px">
      <Heading className="title">Blog page - {data}</Heading>
    </VStack>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: 'List of 100 personalized blogs',
      session,
    },
  };
}
