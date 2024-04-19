// HeroSection.jsx
import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CarouselDefault } from "./CarouselDefault";
import verifiedicon from "../assets/verifiedicon.jpg";
import { useTranslation } from "react-i18next";

function HeroSection({ hero }) {
  const { t } = useTranslation();
  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate("/dubai-verified-properties");
  };

  return (
    <Flex
      flexDir={["column", "row"]}
      alignItems="center"
      justifyContent={["center", "space-between"]}
      overflow="hidden"
      marginTop={"6rem"}
    >
      <Box
        maxW={["100%", "50%"]}
        px={[4, 6, 12]}
        py={12}
        textAlign={["center", "left"]}
      >
        <Flex alignItems="center">
          <Heading
            mb={6}
            fontSize={["4xl", "6xl"]}
            fontWeight="bold"
            letterSpacing="tight"
            color={"#CFB05C"}
            as="h3"
          >
            {t(hero.title)}
          </Heading>
          <Box ml={2}>
            <img src={verifiedicon} alt="Verified Icon" style={{ width: "70px", height: "70px", marginLeft: "20px" }} />
          </Box>
        </Flex>
        <Text mb={6} color="blackAlpha.700">
          {t(hero.description)}
        </Text>
        <Button
          bg={"#CFB05C"}
          w="70"
          mx={{ base: "auto", md: "0" }}
          _hover={{ bg: "#A07B3F" }}
          color="white"
          fontWeight="bold"
          py="2"
          px="4"
          rounded="md"
          onClick={handleButtonClick}
        >
          {t(hero.buttonText)}
        </Button>
      </Box>
      <Box w={["100%", "50%"]} position="relative">
        <CarouselDefault />
      </Box>
    </Flex>
  );
}

export default HeroSection;
