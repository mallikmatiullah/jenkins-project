import React from 'react'
import bedicon from "../assets/bed.svg";
import land from "../assets/land.svg";
import newicon from "../assets/new.svg";
import bathroom from "../assets/bathroom.svg";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import QRCode from "qrcode.react";

function RoomSaleIncluded({ property, language }) {
    let URL = `${property.qrcode}`;
    const openMapUrl = () => {
        window.open(property.locationURL, '_blank');
    };
    return (
        <>
            <Flex
                flexDir={["column", "row"]}
                overflow="hidden"
            >
                <Box my={8} px={4} maxW={["70%", "70%"]} ml={"5rem"} mt={"5rem"}>
                    <Button variant="outline" colorScheme="blue" mr={3}>{"Project"}</Button>
                    <Button variant="outline" colorScheme="blue" mr={3}>{"For Sale"}</Button>
                    <Button variant="outline" colorScheme="blue" mr={3}>{"Ready to Move-in"}</Button>
                    <Text fontSize="xx-large" fontWeight="bold" mt={4} >{property.title}</Text>
                    <Text fontSize="lg" fontWeight="sm" mt={"1rem"}>${property.location}"
                        <a href="#" style={{ color: "blue", marginLeft: "4px" }} onClick={openMapUrl}>Map view</a>
                    </Text>
                    <Flex alignItems="center" mt={4}>
                        <Box mr={2}><Image src={bedicon} alt="Logo" style={{ width: "40px", height: "40px" }} /></Box>
                        <Text>{`${property.bedrooms} Bedrooms`}</Text>
                        <Flex alignItems="center" mt={2}>
                            <Box mr={2}><Image src={bathroom} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                            <Text>{`${property.bathrooms} Bathrooms`}</Text>
                        </Flex>
                        <Flex alignItems="center" mt={2}>
                            <Box mr={2}><Image src={land} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                            <Text>{`${property.livingRooms} Living Rooms`}</Text>
                        </Flex>
                        <Flex alignItems="center" mt={2}>
                            <Box mr={2}><Image src={newicon} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                            <Text>{`${property.builtUpArea} Built Up Area`}</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Text ml={"13rem"}>Scan this QR code to property details</Text>
                    <Box mb={4}
                        mt={"1rem"}
                        ml={"13rem"}
                        px={[2, 4, 8]}
                        py={4}
                        textAlign={["center", "left"]}
                        borderWidth="2px">
                        <QRCode value={URL} size={256} />
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default RoomSaleIncluded