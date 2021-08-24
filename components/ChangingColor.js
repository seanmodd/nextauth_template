import {
  useColorMode,
  Text,
  useColorModeValue,
  Heading,
  VStack,
} from '@chakra-ui/react';

const ChangingColor = () => {
  const color = useColorModeValue('#ff0000', '#00ff37');

  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'gray.300',
    dark: 'red.500',
  };
  console.log(colorMode);
  return (
    <>
      <VStack>
        <Heading color={color}>Here is the changing of the colors!</Heading>
        <Heading
          bg={bgColor[colorMode]}
          transition="all 0.5s ease-in-out"
          _hover={{ color: `${color}`, transition: 'all 0.5s ease-in-out' }}
        >
          Here is {colorMode === 'light' ? <>Light</> : <> Dark</>} Mode
        </Heading>
        <Text>Here is {colorMode} mode.</Text>
        {colorMode === 'light' ? <h1>It is Light!</h1> : <h1> It is Dark!</h1>}
      </VStack>
    </>
  );
};

export default ChangingColor;
