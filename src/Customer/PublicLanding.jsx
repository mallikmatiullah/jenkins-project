// PublicLanding.jsx
import React, { useState, useEffect } from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import NavBar from "../NavBar/Navbar";
import HeroSection from "./HeroSection";
import laptopicon from "../assets/laptop.svg";
import ListPropertiesBuy from "../Card/ListPropertiesBuy";
import ListPropertiesRent from "../Card/ListPropertiesRent";
import LanguageSelector from "../language-selector";
import { useTranslation } from "react-i18next";
import { allpropertiesen } from '../../public/locales/buyjson/en/allpropertiesen';
import { allpropertiesar } from '../../public/locales/buyjson/ar/allpropertiesar';
import { allpropertiesheroen } from '../../public/locales/hero/en/heroenglish';
import { allpropertiesheroar } from '../../public/locales/hero/ar/heroarabic';

import { allpropertiesenrent } from '../../public/locales/rentjson/en/allpropertiesenrent';
import { allpropertiesarrent } from '../../public/locales/rentjson/ar/allpropertiesarrent';

import { footercontentenglish } from '../../public/locales/footer/en/footerenglish';
import { footercontentarabic } from '../../public/locales/footer/ar/footerarabic';

import Footer from "../Footer/Footer";

const PublicLanding = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  // const [selectedLanguageHome, setSelectedLanguageHome] = useState('English');
  const { i18n } = useTranslation();
  console.log("selected language", selectedLanguage)
  // const handleLanguageChange = (language) => {
  //     setSelectedLanguage(language);
  // };
  const getLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <>
      <NavBar setSelectedLanguage={setSelectedLanguage} />
      {/* <HeroSection selectedLanguage={selectedLanguageHome} /> */}
      {selectedLanguage === 'English'
        ? allpropertiesheroen.heroenglish.map((item, index) => (
          <HeroSection key={index} hero={item} setSelectedLanguage={setSelectedLanguage} />
        ))
        : allpropertiesheroar.heroarabic.map((item, index) => (
          <HeroSection key={index} hero={item} setSelectedLanguage={setSelectedLanguage} />
        ))}
      <Box
        mb={4}
        fontSize={["3xl", "4xl"]}
        color="darkslategray.200"
        textAlign="left"
        position="relative"
        ml={"7rem"}
      >
        <Flex alignItems="center">
          <Text fontWeight="medium" color="dark">
            Featured Buy Properties
          </Text>
          <Box ml={2}>
            <Image h="auto" ml="1rem" maxW="40px" src={laptopicon} alt="" />
          </Box>
        </Flex>
      </Box>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        px={[1, 2, 4, 8]}
      >
        {selectedLanguage === 'English'
          ? allpropertiesen.salepropertiesenglish.map((item, index) => (
            <ListPropertiesBuy key={index} property={item} setSelectedLanguage={setSelectedLanguage} />
          ))
          : allpropertiesar.salepropertiesarabic.map((item, index) => (
            <ListPropertiesBuy key={index} property={item} setSelectedLanguage={setSelectedLanguage} />
          ))}
      </Grid>
      <Box
        mb={4}
        fontSize={["3xl", "4xl"]}
        color="darkslategray.200"
        textAlign="left"
        position="relative"
        ml={"7rem"}
        mt={"3rem"}
      >
        <Flex alignItems="center">
          <Text fontWeight="medium" color="dark">
            Featured Rent Properties
          </Text>
          <Box ml={2}>
            <Image h="auto" ml="1rem" maxW="40px" src={laptopicon} alt="" />
          </Box>
        </Flex>
      </Box>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        px={[1, 2, 4, 8]}
      >
        {selectedLanguage === 'English'
          ? allpropertiesenrent.rentpropertiesenglish.map((item, index) => (
            <ListPropertiesRent key={index} property={item} setSelectedLanguage={setSelectedLanguage} />
          ))
          : allpropertiesarrent.rentpropertiesarabic.map((item, index) => (
            <ListPropertiesRent key={index} property={item} setSelectedLanguage={setSelectedLanguage} />
          ))}
      </Grid>
      {/* footer */}
      {selectedLanguage === 'English'
        ? footercontentenglish.footerenglish.map((foot, index) => (
          <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
        ))
        : footercontentarabic.footerarabic.map((foot, index) => (
          <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
        ))}
    </>
  );
};

export default PublicLanding;
