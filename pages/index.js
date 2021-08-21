import PageContainer from 'components/PageContainer';
import Form from 'components/Form';
import { useSession } from 'next-auth/client';
import { Heading } from '@chakra-ui/react';

export default function Home() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  return (
    <PageContainer title="">
      {/* <Form /> */}
      <Heading>
        {session ? `${session.user.name}, ` : ''}Welcome to{' '}
        <a href="https://nextjs.org">Next.js!</a>
      </Heading>
    </PageContainer>
  );
}
