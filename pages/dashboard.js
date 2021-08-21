import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/client';

const { Heading, VStack } = require('@chakra-ui/react');

function Dashboard() {
  const [loading, setLoading] = useState(true);

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
    return <h2>Loading...</h2>;
  }
  return (
    <VStack pt="100px">
      <Heading>Here is a dashboard</Heading>
    </VStack>
  );
}

export default Dashboard;
