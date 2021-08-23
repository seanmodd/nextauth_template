import PageContainer from 'components/PageContainer';
import Form from 'components/Form';
import { useSession } from 'next-auth/client';
import { Button, Heading, VStack, useDisclosure, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  const [session, loading] = useSession();
  console.log({ session, loading });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState('right');
  return (
    <VStack pt="50px">
      {/* <Form /> */}
      <Heading>
        {session ? `${session.user.name}, ` : ''}Welcome to{' '}
        <a href="https://nextjs.org">Next.js!</a>
      </Heading>
    </VStack>
  );
}
