import { useState, useEffect } from 'react';
import { getSession, signIn, useSession } from 'next-auth/client';

const { Heading, VStack } = require('@chakra-ui/react');

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [session] = useSession();

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
        Dashboard Page!
      </Heading>
      <Heading fontSize="2xl">Owner: {session.user.name}</Heading>
    </VStack>
  );
}

export default Dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination:
          '/api/auth/signin?callbackUrl=http://localhost:3000/dashboard',
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

// import { getSession, useSession } from 'next-auth/client';

// const { Heading, VStack } = require('@chakra-ui/react');

// function Dashboard({ data }) {
//   const [session] = useSession();
//   console.log({ session });

//   return (
//     <VStack pt="100px">
//       <Heading className="title" py="20px">
//         Dashboard Page!
//       </Heading>
//       <Heading fontSize="2xl">{data}</Heading>
//       <Heading fontSize="2xl">Owner: {session.user.name}</Heading>
//     </VStack>
//   );
// }

// export default Dashboard;

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination:
//           '/api/auth/signin?callbackUrl=http://localhost:3000/dashboard',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       data: 'Dashboard data goes here',
//       session,
//     },
//   };
// }
