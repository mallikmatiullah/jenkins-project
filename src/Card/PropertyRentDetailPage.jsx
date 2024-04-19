import React, { useState, useEffect } from "react";
import { Box, Text, Image, Button, Flex, IconButton, Center, Grid, Icon } from "@chakra-ui/react";
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Spinner } from "@chakra-ui/react";
import propertylogo from "../assets/property.png";
import { FaSave, FaShareAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import bedicon from "../assets/bed.svg";
import land from "../assets/land.svg";
import newicon from "../assets/new.svg";
import bathroom from "../assets/bathroom.svg";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import laptopicon from "../assets/laptop.svg";
import NavBar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { getRentImagesUrlId } from "../utils/image-utils";
import { getRentImagesUrl } from "../utils/image-utils";
import { useNavigate } from "react-router-dom";
import RoomSaleIncluded from "../Customer/RoomSaleIncluded";
import PropertyRentType from "../Customer/PropertyRentType";
import PropertyNotFound from "../Customer/PropertyNotFound";

export default function PropertyRentDetailPage({ rentproperties, language }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();
    const property = rentproperties.find((property) => property.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [property]);

    if (!property || parseInt(id) > 10) {
        return <div><PropertyNotFound /></div>;
    }

    console.log("property", property)

    console.log("Id", id);
    console.log("rent properties123", rentproperties);

    const titleclick = (id) => {
        navigate(`/sell-detail-product-page/${id}`);
    }

    // Filter out the current property by ID
    const filteredrentProperties = rentproperties.filter((p) => p.id !== parseInt(id));

    // Get a random index for the filtered properties
    const randomRentIndex = Math.floor(Math.random() * filteredrentProperties.length);

    // Get the random property
    const randomrentProperty = filteredrentProperties[randomRentIndex];

    return (
        <>
            {/* {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh",
                    }}
                >
                    <Spinner />
                </div>
            ) : ( */}
            <Box>
                <NavBar language={language} />
                <Flex
                    flexDir={["column", "row"]}
                    alignItems="center"
                    justifyContent={["center", "space-between"]}
                    overflow="hidden"
                    marginTop={"8rem"}
                >
                    <Box>
                        <Box position="relative" mb={4} ml="auto" mr="auto" textAlign="center">
                            <IconButton
                                aria-label="Previous Image"
                                icon={<FaChevronLeft />}
                                variant="outline"
                                ml={"3rem"}
                                bg="white"
                                onClick={() =>
                                    setSelectedImage((prev) =>
                                        prev === 0 ? property.images.length - 1 : prev - 1
                                    )
                                }
                                position="absolute"
                                left="0"
                                top="50%"
                                transform="translateY(-50%)"
                            />
                            <Image
                                src={getRentImagesUrlId(property.id, property.images[selectedImage])}
                                alt={`Property Image ${selectedImage}`}
                                ml={"3rem"}
                                width="800px"
                                height={"500"}
                                objectFit="cover"
                                style={{ borderRadius: "10px" }}
                            />
                            <IconButton
                                aria-label="Next Image"
                                icon={<FaChevronRight />}
                                variant="outline"
                                bg="white"
                                onClick={() =>
                                    setSelectedImage((prev) =>
                                        prev === property.images.length - 1 ? 0 : prev + 1
                                    )
                                }
                                position="absolute"
                                right="0"
                                top="50%"
                                transform="translateY(-50%)"
                            />
                        </Box>

                    </Box>

                    <Box
                        maxW={["100%", "50%"]}
                        px={[4, 6, 12]}
                        py={12}
                        textAlign={["center", "left"]}
                        borderWidth="2px"
                        borderColor="gray.300"
                        rounded="lg"
                        shadow="md"
                        my={4}
                        mx="auto"
                        bg="white"
                        p={4}
                        position="sticky"
                        top="2rem"
                    >
                        <Flex mt={3}>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                            >
                                <FaSave />
                                <Text ml={2}>Save</Text>
                            </Button>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                            >
                                <FaShareAlt />
                                <Text ml={2}>Share</Text>
                            </Button>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                            >
                                <MdOutlineReportGmailerrorred />
                                <Text ml={2}>Report Project</Text>
                            </Button>
                        </Flex>
                        <Flex alignItems="center">
                            <Image
                                src={propertylogo}
                                alt="Logo"
                                style={{ width: "110px", height: "110px" }}
                            />
                            <Text ml={2}>Listed by</Text>
                            <Button
                                variant="outline"
                                colorScheme="gray"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                                size="sm"
                                borderColor="gray.200"
                            >
                                Authorized Broker
                            </Button>
                        </Flex>
                        <Text mb={4} fontWeight={"bold"} fontSize={"22px"}>
                            {property.title}
                        </Text>
                        <Text mb={4}>Ref no. 100196 </Text>
                        <Text mb={4} color={"gray.500"}>
                            Last updated: 62 days ago
                        </Text>
                        <Flex mt={3}>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                mr={3}
                                display={{ base: "none", md: "flex" }}
                            >
                                Request Call Back
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

                </Flex>
                <Flex
                    justifyContent="center"
                    position="relative"
                    bg="#291f2e"
                    py={2}
                    width="35%"
                    mt="-60px"
                    left="12%"
                    style={{ borderRadius: "10px" }}
                >
                    {property.images.map((image, index) => (
                        <img
                            key={index}
                            src={getRentImagesUrlId(property.id, image)}
                            alt={`Property Image ${index}`}
                            style={{
                                width: "50px",
                                height: "50px",
                                border: selectedImage === index ? "2px solid white" : "none",
                                borderRadius: "5px",
                                margin: "5px",
                                cursor: "pointer"
                            }}
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                </Flex>


            </Box>
            {/* )} */}
            <RoomSaleIncluded property={property} language={language} />
            <PropertyRentType />
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
                            Similar Properties
                        </Text>
                        <Box ml={2}>
                            <Image h="auto" ml="1rem" maxW="40px" src={laptopicon} alt="" />
                        </Box>
                    </Flex>
                </Box>
                <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr 1fr"]} gap="5rem">
                    <Box
                        key={randomrentProperty.id}
                        display="inline-block"
                        mt={0}
                        bg="white"
                        borderWidth="1px"
                        borderColor="gray.200"
                        rounded="lg"
                        shadow="md"
                        _dark={{ bg: "gray.800", borderColor: "gray.700" }}
                        _hover={{ cursor: "pointer" }}
                    >
                        <Box onClick={() => titleclick(randomrentProperty.id)} position="relative" borderTopRadius="lg" overflow="hidden">
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
                                {randomrentProperty.featured}
                            </Box>
                            <Box
                                position="absolute"
                                top="4rem"
                                right="0"
                                bg="#FFEFD5"
                                color="black"
                                py={1}
                                px={2}
                                borderTopLeftRadius="lg"
                                fontSize="xs"
                                fontWeight="bold"
                                zIndex="1"
                            >
                                {randomrentProperty.propertyType}
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
                            <Image mx="auto" w="100%" h="auto" src={randomrentProperty.images[0] ? getRentImagesUrl(randomrentProperty.id, randomrentProperty.images[0]) : ""} alt="property image" />
                        </Box>
                        <Box onClick={() => titleclick(randomrentProperty.id)} p={5} >
                            <Box _hover={{ cursor: "pointer" }}>
                                <Text
                                    mb={2}
                                    fontSize="2xl"
                                    fontWeight="bold"
                                    letterSpacing="tight"
                                    color="gray.800"
                                    _dark={{ color: "white" }}
                                >
                                    {randomrentProperty.title}
                                </Text>
                                <Box
                                    bg="#FFEFD5"
                                    rounded="md"
                                    p={1}
                                    display="inline-block"
                                >
                                    <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
                                        {randomrentProperty.location}
                                    </Text>
                                </Box>
                                <Text fontSize="12px" color="gray.500" mt={3}>
                                    Updated Few Hours ago
                                </Text>
                                <Text fontSize="lg" color="gray.700" mt={3}>
                                    <Box as="span" fontWeight="bold">{randomrentProperty.price}</Box>
                                </Text>
                            </Box>
                            <Box>
                                <Grid templateColumns="repeat(4, 1fr)" gap={3} mt={3}>
                                    <Box display="flex" alignItems="center">
                                        <Image src={bedicon} alt="Bed Icon" width="25" height="25" />
                                        <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                            {randomrentProperty.bedrooms}
                                        </Text>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Image src={land} alt="Bed Icon" width="25" height="25" />
                                        <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                            {randomrentProperty.size}
                                        </Text>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Image src={newicon} alt="Bed Icon" width="25" height="25" />
                                        <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                            {randomrentProperty.newText}
                                        </Text>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Image src={bathroom} alt="Bed Icon" width="25" height="25" />
                                        <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }} ml={1}>
                                            {randomrentProperty.bathrooms}
                                        </Text>
                                    </Box>
                                </Grid>
                                <Center mt={3}>
                                    <Button
                                        variant="outline"
                                        colorScheme="blue"
                                        mr={3}
                                        display={{ base: "none", md: "flex" }}
                                    >
                                        Request Call Back
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
                                </Center>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            {/* <Footer language={language} /> */}

        </>
    );
}
