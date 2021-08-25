import { Heading, Image, Text, VStack, Box, Stack } from '@chakra-ui/react';
import ChangingColor from 'components/ChangingColor';
import faker from 'faker';
import Link from 'next/link';

function App() {
  return (
    <VStack pt="50px">
      <Heading>Product List Standard Routes</Heading>

      <Stack py="15px" direction="row">
        <VStack p="10px" borderWidth="2px">
          <Text my="0px">Product 1</Text>

          <Link href="/learning/product-list/product 1">
            <Image
              boxSize="100px"
              py="0px"
              cursor="pointer"
              objectFit="cover"
              src={faker.image.animals()}
              alt="Faker Animals"
            />
          </Link>
        </VStack>
        <VStack p="10px" borderWidth="2px">
          <Text my="0px">Product 2</Text>
          <Link href="/learning/product-list/product 2">
            <Image
              boxSize="100px"
              py="0px"
              cursor="pointer"
              objectFit="cover"
              src={faker.image.business()}
              alt="Faker Business"
            />
          </Link>
        </VStack>
        <VStack p="10px" borderWidth="2px">
          <Text my="0px">Product 3</Text>
          <Link href="/learning/product-list/product 3">
            <Image
              boxSize="100px"
              py="0px"
              cursor="pointer"
              objectFit="cover"
              src={faker.image.technics()}
              alt="Faker Tech"
            />
          </Link>
        </VStack>
      </Stack>
      <h1
        style={{
          fontSize: '30px',
          textDecoration: 'underline',
          textTransform: 'uppercase',
        }}
      >
        {faker.animal.type()}
      </h1>
      <Text>1. {faker.vehicle.vehicle()}</Text>
      <Text>1. {faker.internet.email()}</Text>
    </VStack>
  );
}

export default App;
