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

const ProductDetail = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <>
      <VStack pt="50px">
        <Link href="/learning/nested-dynamic">
          <button style={{ marginTop: '0px' }}>go back</button>
        </Link>
        <Heading pt="50px">
          Here is review {reviewId} about product {productId}
        </Heading>

        <Stack py="15px" direction="row">
          <VStack p="10px" borderWidth="2px">
            <Text textTransform="uppercase">Product {productId}</Text>
            <Text textTransform="uppercase">Review {reviewId}</Text>
          </VStack>
        </Stack>
      </VStack>
    </>
  );
};

export default ProductDetail;
