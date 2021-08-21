const { Heading } = require('@chakra-ui/react');

function Blog() {
  return (
    <>
      <Heading>This is the blog</Heading>
    </>
  );
}

export default Blog;

export const getServerSideProps = async (ctx) => ({
  props: {
    data: null,
  },
});
