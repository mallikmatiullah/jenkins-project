import { Box, Text, Heading, Flex, Button, Image, Center } from "@chakra-ui/react";
import propertynotfound from "../assets/propertynotfound.jpg";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function PropertyNotFound() {
    return (
        <Center height="80vh">
            <Box
                p={8}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
            >
                <Image src={propertynotfound} alt="Property Not Found" maxW="200px" mx="auto" />
                <Heading as="h3" size="md" mt={4} mb={2}>
                    Property Not Found
                </Heading>
                <Text fontSize="md" mb={4}>
                    We're sorry, but the property you are looking for could not be found.
                </Text>
                <Flex justifyContent="center">
                    <Button
                        as={Link}
                        to="/"
                        bg={"#CFB05C"}
                        w="70"
                        _hover={{ bg: "#A07B3F" }}
                        color="white"
                        leftIcon={<FaHome />}
                        mt={4}
                    >
                        Go to Home
                    </Button>
                </Flex>
            </Box>
        </Center>
    );
}

export default PropertyNotFound;
