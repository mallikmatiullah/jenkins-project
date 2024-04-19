import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Center, useColorModeValue, Button, Menu, MenuButton, MenuList, MenuItem, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TiWorld } from "react-icons/ti";
import { ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import ReactCountryFlag from "react-country-flag";
import NavItem from "./NavItem";
import { useTranslation } from "react-i18next";

const NavBar = ({ setSelectedLanguage }) => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "allpropertiesen", lang: "English" },
    { code: "allpropertiesar", lang: "Arabic" },
  ];

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const handleChangeLanguage = (code, lang) => {
    i18n.changeLanguage(code);
    setSelectedLanguage(lang);
  };

  return (
    <>
      <Box
        backgroundColor={"#fafaf5"}
        borderRadius={"8px"}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          align="center"
          p={{ base: 1, md: 1 }}
          borderBottomWidth={{ base: "1px", md: "0px" }}
          borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Link to={"/"}>
            <Image
              src={logo}
              alt="ViaCyber-Logo"
              width={{ base: "6rem", md: "9rem" }}
              marginLeft={"3rem"}
            />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            flexDir="row"
            align="center"
            justifyContent="center"
            flex="1"
          >
            <Center>
              <NavItem to="/" mx={4}>
                {"Home"}
              </NavItem>
              <NavItem to="/buy-properties" mx={4}>
                {"Buy"}
              </NavItem>
              <NavItem to="/rent-properties" mx={4}>
                {"Rent"}
              </NavItem>
              <NavItem to="/contact-us" mx={4}>
                {"Contact Us"}
              </NavItem>
            </Center>
          </Flex>
          <Box ml="auto" mr="3" display="flex" alignItems="center">
            <Menu>
              <TiWorld _hover={{ color: "blue.500" }} style={{ fontSize: "1.5rem", marginRight: "0.5rem" }} />
              <MenuButton
                as={Flex}
                align="center"
                cursor="pointer"
                _hover={{ color: "blue.500" }}
              >
                <Icon as={ChevronDownIcon} />
              </MenuButton>
              <MenuList>
                {languages.map((lng) => (
                  <MenuItem key={lng.code} onClick={() => handleChangeLanguage(lng.code, lng.lang)}>
                    <Flex alignItems="center">
                      <ReactCountryFlag
                        countryCode={lng.code === "allpropertiesen" ? "US" : "AE"}
                        svg
                        style={{
                          width: "2em",
                          height: "2em",
                          marginRight: "1rem",
                        }}
                      />
                      {lng.lang}
                    </Flex>
                  </MenuItem>
                ))}
              </MenuList>


            </Menu>
          </Box>
          {/* {languages.map((lng) => {
            return (
              <>
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
                  key={lng.code}
                  onClick={() => handleChangeLanguage(lng.code, lng.lang)}
                >
                  {lng.lang}
                </Button>
              </>
            );
          })} */}
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
