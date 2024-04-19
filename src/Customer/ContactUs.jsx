import React, { useEffect } from "react";
import { Box, Flex, Image, Text, Link, IconButton } from "@chakra-ui/react";
import contactimage from "../assets/3a.jpg";
import NavBar from '../NavBar/Navbar';
import { FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Footer from '../Footer/Footer';

function ContactUs({ property }) {
    const { t } = useTranslation();
    const handleLocationClick = () => {
        window.open("https://www.google.com/maps?q=Dubai", "_blank");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    },);
    return (
        <>
            <Flex
                justify="space-between"
                align="center"
                p={8}
                boxShadow="lg"
                borderRadius="lg"
                bg="white"
                mt={20}
            >
                <Box flex="1" ml={"3rem"}>
                    <Text fontWeight="bold" mb={4}>{t(property.name)}</Text>
                    <Text fontWeight="bold" mb={4}>{t(property.sendemail)} : luxuxryproperty123@gmail.com</Text>
                    <Text fontWeight="bold" mb={4}>{t(property.owner)} : +971-43-1234567</Text>
                    <Text fontWeight="bold" mb={4}>
                        {t(property.location)}
                        <Link href="#" onClick={handleLocationClick}>
                            ..
                        </Link>
                        <IconButton
                            ml={2}
                            aria-label="View location"
                            icon={<FiMapPin />}
                            borderRadius="full"
                            bg="#CFB05C"
                            color="white"
                            onClick={handleLocationClick}
                        />
                    </Text>
                </Box>
                <Box flex="1" ml={8}>
                    <Image src={contactimage} alt="Property" borderRadius="md" />
                </Box>
            </Flex>
            {/* <Footer /> */}
        </>
    )
}

export default ContactUs;