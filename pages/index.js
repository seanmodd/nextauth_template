import PageContainer from 'components/PageContainer';
import Form from 'components/Form';
import { useSession } from 'next-auth/client';
import { Button, Heading, VStack } from '@chakra-ui/react';

export default function Home() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <VStack pt="100px">
      {/* <Form /> */}
      <Heading>
        {session ? `${session.user.name}, ` : ''}Welcome to{' '}
        <a className="mya" href="https://nextjs.org">
          Next.js!
        </a>
      </Heading>
      <Button>Test Button</Button>
      <button>here is regular button</button>
      
    </VStack>
  );
}
