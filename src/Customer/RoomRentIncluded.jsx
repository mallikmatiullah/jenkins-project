import React from 'react'
import bedicon from "../assets/bed.svg";
import land from "../assets/land.svg";
import newicon from "../assets/new.svg";
import bathroom from "../assets/bathroom.svg";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import QRCode from "qrcode.react";

function RoomRentIncluded({ property, language }) {
    let URL = `https://dream-listing.vialogicsolutions.co.uk/rent-detail-product-page/${property.id}`;
    return (
        <>
            <Flex
                flexDir={["column", "row"]}
                overflow="hidden"
            >
                <Box my={8} px={4} maxW={["70%", "70%"]} ml={"5rem"}>
                    <Button variant="outline" colorScheme="blue" mr={3}>{language === "en" ? "Project" : "مشروع"}</Button>
                    <Button variant="outline" colorScheme="blue" mr={3}>{language === "en" ? "For Rent" : "للبيع"}</Button>
                    <Button variant="outline" colorScheme="blue" mr={3}>{language === "en" ? "Ready to Move-in" : "جاهز للسكن"}</Button>
                    <Text fontSize="xx-large" fontWeight="bold" mt={4} >{language === "en" ? `${property.title}` : "مشروع دار قرطبة - شقق للبيع"}</Text>
                    <Text fontSize="lg" fontWeight="sm" mt={"1rem"}>{language === "en" ? `${property.location}` : "قرطبة، الشرق، الرياض"}
                        <a href="#" style={{ color: "blue", marginLeft: "4px" }}>Map view</a>
                    </Text>
                    <Flex alignItems="center" mt={4}>
                        <Box mr={2}><Image src={bedicon} alt="Logo" style={{ width: "40px", height: "40px" }} /></Box>
                        <Text>{language === "en" ? `${property.bedrooms} Bedrooms` : "3 غرف نوم"}</Text>
                        <Flex alignItems="center" mt={2}>
                            <Box mr={2}><Image src={bathroom} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                            <Text>{language === "en" ? `${property.bathrooms} Bathrooms` : "4.5 حمامات"}</Text>
                        </Flex>
                        <Flex alignItems="center" mt={2}>
                            <Box mr={2}><Image src={land} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                            <Text>{language === "en" ? `${property.livingRooms} Living Rooms` : "1 غرفة معيشة"}</Text>
                        </Flex>
                        <Flex alignItems="center" mt={2}>
                            <Box mr={2}><Image src={newicon} alt="Logo" style={{ width: "40px", height: "40px", marginLeft: "1rem" }} /></Box>
                            <Text>{language === "en" ? `${property.builtUpArea} Built Up Area` : "1 غرفة ضيوف"}</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Text ml={"13rem"}>Scan this QR code to view property details</Text>
                    <Box mb={4}
                        // maxW={["60%", "80%"]}
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

export default RoomRentIncluded