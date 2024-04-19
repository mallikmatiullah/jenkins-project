import { Box, Flex, Text } from "@chakra-ui/react";
import { FaWifi, FaCar, FaArrowUp } from 'react-icons/fa';
import RentLocationNearBy from "./RentLocationNearBy";
import ProjectDescriptionRent from "./ProjectDescriptionRent";

export default function RentAmenities({ language }) {
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
                <Text fontSize="x-large" mt={"1rem"}>Rent Amenities</Text>
                <Flex alignItems="center" mt={"1rem"}>
                    <Flex alignItems="center">
                        <FaWifi />
                        <Text ml={2}>Smart Home System</Text>
                    </Flex>
                    <Flex alignItems="center" ml={"2rem"}>
                        <FaCar />
                        <Text ml={2}>Underground Parking</Text>
                    </Flex>
                    <Flex alignItems="center" ml={"2rem"}>
                        <FaArrowUp />
                        <Text ml={2}>Elevator</Text>
                    </Flex>
                </Flex>
            </Box>

            <ProjectDescriptionRent />
        </>
    );
}
