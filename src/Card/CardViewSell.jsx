import React, { useEffect, useState } from "react";
import { Box, Center, Flex, Grid, Image, Link, Text, Button, Icon } from "@chakra-ui/react";

import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import bedicon from "../assets/bed.svg";
import land from "../assets/land.svg";
import newicon from "../assets/new.svg";
import bathroom from "../assets/bathroom.svg";
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { getSellImagesUrl } from "../utils/image-utils";
// import { useTranslation } from "react-i18next";

export default function CardViewSell({ property }) {
    // const { t, i18n } = useTranslation("global");
    const navigate = useNavigate();

    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : {};
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id],
        }));
    };

    const titleclick = (id) => {
        navigate(`/buy-detail-product-page/${id}`);
    }

    return (
        <>
            <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={1}>
                <Box mt={16} px={[4, 8, 16, 20]}>
                    <Box
                        key={property.id}
                        display="inline-block"
                        bg="white"
                        borderWidth="1px"
                        borderColor="gray.200"
                        rounded="lg"
                        shadow="md"
                        _hover={{ cursor: "pointer", shadow: "lg" }}
                    >
                        <Box
                            position="relative"
                            borderTopRadius="lg"
                            overflow="hidden"
                            onClick={() => titleclick(property.id)}
                            cursor="pointer"
                        >
                            <Image
                                src={property.images[0] ? getSellImagesUrl(property.id, property.images[0]) : ""}
                                alt="property image"
                                borderTopRadius="lg"
                                w="100%"
                                h="200px"
                                objectFit="cover"
                            />
                            {property.featured && (
                                <Box
                                    position="absolute"
                                    top="0"
                                    right="0"
                                    bg="green.500"
                                    color="white"
                                    py={1}
                                    px={2}
                                    borderTopLeftRadius="lg"
                                    borderBottomLeftRadius="lg"
                                    fontSize="xs"
                                    fontWeight="bold"
                                    zIndex="1"
                                >
                                    {property.featured}
                                </Box>
                            )}
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                bg="blue.500"
                                color="white"
                                py={1}
                                px={2}
                                borderTopRightRadius="lg"
                                fontSize="xs"
                                fontWeight="bold"
                                zIndex="1"
                            >
                                {property.propertyType}
                            </Box>
                            <Box
                                position="absolute"
                                bottom="0"
                                left="0"
                                bg="gray.800"
                                color="white"
                                py={1}
                                px={2}
                                borderBottomRightRadius="lg"
                                fontSize="xs"
                                fontWeight="bold"
                                zIndex="1"
                            >
                                {favorites[property.id] ? "Favorited" : "Add to Favorites"}
                            </Box>
                        </Box>

                        <Box p={5}>
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                letterSpacing="tight"
                                color="gray.800"
                                _hover={{ color: "blue.500" }}
                                cursor="pointer"
                                onClick={() => titleclick(property.id)}
                            >
                                {property.title}
                            </Text>
                            <Text fontSize="sm" color="gray.500" mt={1}>
                                {property.location}
                            </Text>
                            <Text fontSize="sm" color="gray.500" mt={1}>
                                Updated Few Hours ago
                            </Text>
                            <Text fontSize="lg" color="gray.700" mt={3}>
                                {property.price}
                            </Text>
                            <Flex mt={3} justify="space-between" align="center">
                                <Flex align="center">
                                    <Image src={bedicon} alt="Bed Icon" width="25" height="25" mr={1} />
                                    <Text fontSize="sm" color="gray.700">
                                        {property.bedrooms} Beds
                                    </Text>
                                </Flex>
                                <Flex align="center">
                                    <Image src={bathroom} alt="Bathroom Icon" width="25" height="25" mr={1} />
                                    <Text fontSize="sm" color="gray.700">
                                        {property.bathrooms} Baths
                                    </Text>
                                </Flex>
                                <Flex align="center">
                                    <Image src={land} alt="Land Icon" width="25" height="25" mr={1} />
                                    <Text fontSize="sm" color="gray.700">
                                        {property.size}
                                    </Text>
                                </Flex>
                                <Flex align="center">
                                    <Image src={newicon} alt="Land Icon" width="25" height="25" mr={1} />
                                    <Text fontSize="sm" color="gray.700">
                                        {property.newText}
                                    </Text>
                                </Flex>
                            </Flex>
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
                                    colorScheme="green"
                                    mr={3}
                                    display={{ base: "none", md: "flex" }}
                                >
                                    <FaWhatsapp />
                                </Button>
                                <Button
                                    variant="outline"
                                    colorScheme="gray"
                                    mr={3}
                                    display={{ base: "none", md: "flex" }}
                                >
                                    <FaPhone />
                                </Button>
                            </Center>
                        </Box>
                    </Box>

                </Box>

            </Grid>

        </>
    );
}
