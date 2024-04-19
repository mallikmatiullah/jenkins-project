import { Box, Flex, Text } from "@chakra-ui/react";
import RentAmenities from "./RentAmenities";

export default function AdditionalRentInformation({ language }) {
    return (
        <>
            <Box
                borderWidth="1px"
                borderRadius="md"
                width={"60%"}
                ml={"5rem"}
                p={4}
                mt={4}
            >
                <Text fontSize="x-large" mt={"1rem"}>Additional Information - Rent</Text>
                <Flex alignItems="center" mb={2} mt={"1rem"}>
                    <Text>Building Year</Text>
                    <Text ml={2} fontWeight={"bold"}>2023</Text>
                    <Flex alignItems="center" ml={"5rem"}>
                        <Text>Electricity</Text>
                        <Text ml={2} fontWeight={"bold"}>Yes</Text>
                    </Flex>
                </Flex>
                <Flex alignItems="center" mb={2} mt={"1rem"}>
                    <Flex alignItems="center">
                        <Text>Water</Text>
                        <Text fontWeight={"bold"} ml={"1rem"}>Yes</Text>
                    </Flex>
                    <Flex alignItems="center" ml={"5rem"}>
                        <Text>Residency Type</Text>
                        <Text ml={2} fontWeight={"bold"}>Family</Text>
                    </Flex>
                </Flex>
            </Box>

            <RentAmenities language={language} />
        </>
    );
}
