import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaRoad } from "react-icons/fa";
import { TbNavigationNorth, TbNavigationSouth } from "react-icons/tb";
import AdditionalInformation from "./AdditionalInformation";

export default function StreetInformation({ saleproperties, language }) {
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
                <Text fontSize="x-large" mt={"1rem"}>{"Street Information"}</Text>
                <Flex alignItems="center" mb={2} mt={"1rem"}>
                    <TbNavigationSouth fontSize="1.5rem" />
                    <Text ml={"1rem"}>{"Street 1 | width 36m | Facing South"}</Text>
                </Flex>
                <Flex alignItems="center">
                    <TbNavigationNorth fontSize="1.5rem" />
                    <Text ml={"1rem"}>{"Street 2 | width 20m | Facing North"}</Text>
                </Flex>
            </Box>
            <AdditionalInformation saleproperties={saleproperties} language={language} />
        </>
    );
}
