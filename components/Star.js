import { HStack, Link, Text, useColorMode } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Star = () => {
  const { colorMode } = useColorMode();

  return (
    <Link href="https://github.com/seanmodd/nextauth_template" isExternal>
      <HStack
        zIndex="docked"
        pos="fixedbottom-0 right-0"
        py={3}
        px={4}
        bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
        borderBottomWidth="3px"
        borderLeftWidth="3px"
        borderColor={colorMode === 'light' ? 'gray.800' : 'gray.100'}
        roundedBottomLeft="3xl"
      >
        <FaGithub size="24px" />
        <Text fontWeight="600">Star me on GitHub</Text>
      </HStack>
    </Link>
  );
};

export default Star;
