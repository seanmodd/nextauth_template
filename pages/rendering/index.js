import { Heading, Text, VStack } from '@chakra-ui/react';
import ChangingColor from 'components/ChangingColor';
import faker from 'faker';

function App() {
  return (
    <VStack pt="50px">
      <Heading>Rendering</Heading>
      <ChangingColor />
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
    </VStack>
  );
}

export default App;
