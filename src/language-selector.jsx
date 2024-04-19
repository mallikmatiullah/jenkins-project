import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const languages = [
  { code: "allpropertiesen", lang: "English" },
  { code: "allpropertiesar", lang: "Arabic" },
];

const LanguageSelector = ({ setSelectedLanguage }) => {
  const { i18n } = useTranslation();


  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng.code);
  //   setSelectedLanguage(lng.lang);
  // i18n.changeLanguage(lng.code).then(() => {
  //   setSelectedLanguage(lng.lang);
  //   console.log("setSelectedLanguage", setSelectedLanguage)
  // });
  // };

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelectedLanguage(languages.find(lng => lng.code === code).lang);
  };


  return (
    <div className="btn-container">
      {languages.map((lng) => {
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
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.lang}
            </Button>
          </>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
