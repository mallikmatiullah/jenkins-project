import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaRoad } from "react-icons/fa";
import { TbNavigationNorth, TbNavigationSouth } from "react-icons/tb";
import AdditionalRentInformation from "./AdditionalRentInformation";

export default function StreetRentInformation({ language }) {
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
                <Text fontSize="x-large" mt={"1rem"}>Street Information - Rent</Text>
                <Flex alignItems="center" mb={2} mt={"1rem"}>
                    <TbNavigationSouth fontSize="1.5rem" />
                    <Text ml={"1rem"}>Street 1 | width 36m | Facing South</Text>
                </Flex>
                <Flex alignItems="center">
                    <TbNavigationNorth fontSize="1.5rem" />
                    <Text ml={"1rem"}>Street 2 | width 20m | Facing North</Text>
                </Flex>
            </Box>

            <AdditionalRentInformation language={language} />
        </>
    );
}
