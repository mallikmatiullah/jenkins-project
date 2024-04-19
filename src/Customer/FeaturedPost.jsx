import PropTypes from "prop-types";
import { Box, Card, Heading, Image, ListItem, Link, Text, UnorderedList } from "@chakra-ui/react";
// import { LinkItems, } from "../../Components/SideBar/SideBar/LinkItems";

/**
 * @param {{ post: any; }} props
 */
function FeaturedPost(props) {
  const { post } = props;

  return (
    <Card display="flex" flexDirection={{ base: "column", md: "row" }} boxShadow="0 0 8px rgba(0, 0, 0, 0.2)">

      <Box width="100%" display="flex" flexDir={["column", "row"]} alignItems="flex-start">
        <Box p={4} flex={1}>
          <Heading as="h2" size="lg" color="#CFB05C" fontWeight="medium" mb={2}>
            {post.title}
            {/* {post.language === "en" ? "AI Powered Platform" : "منصة مدعومة بالذكاء الاصطناعي"} */}
          </Heading>
          <Text fontSize="md" mb={4}>
            {post.description}
          </Text>
          <Text fontSize="md" fontWeight={"bold"} mb={4}>
            {post.challenge}
          </Text>
          <Text fontSize="sm" mb={4}>
            <UnorderedList mt={2}>
              <ListItem mt={1} >
                {post.challenge1}
              </ListItem>
              <ListItem mt={1} >
                {post.challenge2}
              </ListItem>

            </UnorderedList>
          </Text>
          <Link
            fontSize="sm"
            color="#CFB05C"
            fontWeight="medium"
            border="1px solid #A07B3F"
            borderRadius="md"
            px={8}
            py={2}
            _hover={{ bg: "#A07B3F", color: "white" }}
          >
            {post.buttonText}
          </Link>
        </Box>
      </Box>
      <Box alignSelf={{ base: "center", md: "flex-start" }} ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }}>
        <Image src={post.image} alt={post.imageLabel} maxW="100%" height="auto" />
      </Box>
    </Card>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    challenge1: PropTypes.string.isRequired,
    challenge2: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
