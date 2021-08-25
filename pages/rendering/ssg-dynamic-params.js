import { Heading, Image, Text, VStack, Box, Stack } from '@chakra-ui/react';
import ChangingColor from 'components/ChangingColor';
import faker from 'faker';

function App() {
  return (
    <VStack pt="50px">
      <Heading>SSG Dynamic Parameters</Heading>
      <h1
        style={{
          fontSize: '40px',
          textDecoration: 'underline',
          textTransform: 'uppercase',
        }}
      >
        {faker.animal.type()}
      </h1>
      <Text>1. {faker.vehicle.vehicle()}</Text>
      <Text>1. {faker.internet.email()}</Text>
      <Stack direction="row">
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Stack>
    </VStack>
  );
}

export default App;
