import React, { useState } from "react";
import { Box, Text, Image, Flex, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import realestate from "../assets/3a.jpg";
import RentProjectDescription from "./RentProjectDescription";

function RentImageSlider({ language }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        { id: 1, url: realestate },
        { id: 2, url: realestate },
        { id: 3, url: realestate },
        { id: 4, url: realestate },
        { id: 5, url: realestate },
        { id: 6, url: realestate },
        { id: 7, url: realestate },
        { id: 8, url: realestate },
    ];

    const handlePreviousImage = () => {
        setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        console.log("scrolll", selectedImage)
    };

    const handleNextImage = () => {
        setSelectedImage(selectedImage === 2 ? 0 : selectedImage + 1);
    };

    return (
        <>
            <Text fontSize="x-large" ml={"5rem"} mt={"2rem"}>{language === "en" ? "Images & Media - Rent" : "الصور والوسائط"}</Text>
            <Box
                borderWidth="1px"
                borderRadius="md"
                width={"60%"}
                ml={"5rem"}
                height={"18rem"}
                alignItems={"center"}
                p={4}
                mt={4}
                position="relative"
                overflow="hidden"
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    width={`${images.length * 33.33}%`}
                    height="100%"
                    position="absolute"
                    transition="transform 0.9s ease-in-out"
                    transform={`translateX(-${(selectedImage % images.length) * 33.33}%)`}
                >
                    {images.map((image, index) => (
                        <Box key={index} width="30%" height="100%">
                            <Image
                                src={image.url}
                                alt={`Property ${index + 1}`}
                                width="80%"
                                height="85%"
                                objectFit="cover"
                                style={{ borderRadius: "10px" }}
                            />
                        </Box>
                    ))}
                </Flex>

                {images.length > 3 && (
                    <>
                        <IconButton
                            aria-label="Previous Image"
                            icon={<FaChevronLeft />}
                            variant="outline"
                            bg={"white"}
                            onClick={handlePreviousImage}
                            position="absolute"
                            left="0"
                            top="50%"
                            transform="translateY(-50%)"
                        />
                        <IconButton
                            aria-label="Next Image"
                            icon={<FaChevronRight />}
                            variant="outline"
                            bg={"white"}
                            onClick={handleNextImage}
                            position="absolute"
                            right="0"
                            top="50%"
                            transform="translateY(-50%)"
                        />
                    </>
                )}
            </Box>
            <RentProjectDescription language={language} />
        </>
    );
}


export default RentImageSlider;
