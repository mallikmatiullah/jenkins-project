import React from "react";
import { Box, Flex, Grid, Image, Text, Button, Icon } from "@chakra-ui/react";
import dream from "../assets/5a.jpg";
import laptopicon from "../assets/laptop.svg";
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import bedicon from "../assets/bed.svg";
import land from "../assets/land.svg";
import newicon from "../assets/new.svg";
import bathroom from "../assets/bathroom.svg";
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


export default function MoreCardView({ language }) {
    const navigate = useNavigate();
    const titleclick = () => {
        navigate("/some-other-page");
    }
    return (
        <Box mt={16} px={[4, 8, 16, 20]}>
            <Box
                mb={12}
                fontSize={["3xl", "4xl"]}
                color="darkslategray.200"
                textAlign="left"
                position="relative"
            >
                <Flex alignItems="center">
                    <Text fontWeight="medium" color="dark">
                        {" "}
                        {language === "en" ? "Similar Properties" : "العقارات المماثلة"}
                    </Text>
                    <Box ml={2}>
                        <Image h="auto" ml="1rem" maxW="40px" src={laptopicon} alt="" />
                    </Box>
                </Flex>
            </Box>

            <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr 1fr"]} gap="7rem">
                <Box
                    display="inline-block"
                    mt={0}
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    rounded="lg"
                    shadow="md"
                    _dark={{ bg: "gray.800", borderColor: "gray.700" }}
                >
                    <Box position="relative" borderTopRadius="lg" overflow="hidden">
                        <Box
                            position="absolute"
                            top="3"
                            left="0"
                            bg="#FFEFD5"
                            color="black"
                            py={1}
                            px={2}
                            borderTopRightRadius="lg"
                            fontSize="xs"
                            fontWeight="bold"
                            zIndex="1"
                        >
                            {language === "en" ? "FEATURED PLUS" : "ميزة إضافية"}
                        </Box>
                        <Box
                            position="absolute"
                            top="11rem"
                            left="0"
                            bg="#FFEFD5"
                            color="black"
                            py={1}
                            px={2}
                            borderTopRightRadius="lg"
                            fontSize="xs"
                            fontWeight="bold"
                            zIndex="1"
                        >
                            {language === "en" ? "VILLA" : "فيلا"}
                        </Box>
                        <Box
                            position="absolute"
                            top="2"
                            right="2"
                            bg="#FFEFD5"
                            color="blue"
                            p={2}
                            borderRadius="full"
                            zIndex="1"
                        >
                            <Icon as={FaHeart} />
                        </Box>
                        <Image mx="auto" w="100%" h="auto" src={dream} alt="" />
                    </Box>

                    <Box p={5}>
                        <Text
                            mb={2}
                            fontSize="2xl"
                            fontWeight="bold"
                            letterSpacing="tight"
                            color="gray.800"
                            _dark={{ color: "white" }}
                            onClick={titleclick}
                        >
                            {language === "en" ? "Apartment 137.08 SQM with 4 Bedrooms" : "شقة 137.08 متر مربع مع 4 غرف نوم"}
                        </Text>
                        <Box
                            bg="#FFEFD5"
                            rounded="md"
                            p={1}
                            display="inline-block"
                        >
                            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
                                {language === "en" ? "Qurtubah, East Riyadh, Riyadh" : "قرطبة، الشرق، الرياض"}
                            </Text>
                        </Box>
                        <Flex alignItems="center" mt={5}>
                            <Box
                                rounded="md"
                                p={1}
                                display="flex"
                                alignItems="center"
                            >
                                <img src={bedicon} alt="Bed Icon" width="30" height="30 " />
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                    3
                                </Text>
                            </Box>
                            <Box
                                rounded="md"
                                p={1}
                                ml={8}
                                display="flex"
                                alignItems="center"
                            >
                                <img src={land} alt="Bed Icon" width="25" height="25" />
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                    370
                                </Text>
                            </Box>
                            <Box
                                rounded="md"
                                p={1}
                                ml={8}
                                display="flex"
                                alignItems="center"
                            >
                                <img src={newicon} alt="Bed Icon" width="25" height="25" />
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                    {language === "en" ? "New" : "جديد"}
                                </Text>
                            </Box>
                            <Box
                                rounded="md"
                                p={1}
                                ml={8}
                                display="flex"
                                alignItems="center"
                            >
                                <img src={bathroom} alt="Bed Icon" width="25" height="25" />
                                <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                    3
                                </Text>
                            </Box>
                        </Flex>

                        <Text fontSize="12px" color="gray.500" mt={3}>
                            {language === "en" ? "Updated Few Hours ago" : "تحديث قبل ساعات قليلة"}
                        </Text>
                        <Text fontSize="lg" color="gray.700" mt={3}>
                            Rs. <Box as="span" fontWeight="bold">4M</Box>
                        </Text>
                        <Flex mt={3}>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                            >
                                {language === "en" ? "Request Call Back" : "طلب اتصال مرة أخرى"}
                            </Button>
                            <Button
                                variant="outline"
                                bg="#006400"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                                style={{ color: "white" }}
                            >
                                <FaWhatsapp />
                            </Button>
                            <Button
                                variant="outline"
                                bg="#1E90FF"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                                style={{ color: "white" }}
                            >
                                <FaPhone />
                            </Button>
                        </Flex>

                    </Box>
                </Box>
            </Grid>
        </Box>
    );
}
