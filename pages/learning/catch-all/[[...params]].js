import faker from 'faker';
import { useRouter } from 'next/router';
import {
  Heading,
  Image,
  Text,
  VStack,
  Box,
  Stack,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';

const App = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <VStack pt="50px">
        <Heading pt="50px">Params length is 2</Heading>
        <Text>
          Viewing docs for concept {params[0]} and feature {params[1]}
        </Text>
      </VStack>
    );
  }

  if (params.length === 1) {
    return (
      <>
        <VStack pt="50px">
          <Heading pt="50px">Params length is not 2 {params}</Heading>
        </VStack>
      </>
    );
  }

  return (
    <>
      <VStack pt="50px">
        <Heading pt="50px">No params</Heading>
      </VStack>
    </>
  );
};

export default App;
