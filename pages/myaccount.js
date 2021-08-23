import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/client';
import { VStack } from '@chakra-ui/layout';

function MyAccount() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
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
        <h1>Loading...</h1>
      </VStack>
    );
  }
  return (
    <>
      <h1 style={{ fontSize: '32px' }}>My Account</h1>
    </>
  );
}
export default MyAccount;
