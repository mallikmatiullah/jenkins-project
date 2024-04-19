// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PublicLanding from "./Customer/PublicLanding";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import laptopicon from "./assets/laptop.svg";
import BuyProperty from "./Customer/BuyProperty";
import ContactUs from "./Customer/ContactUs";
import propertiesSaleData from "./PropertyJsonData/propertyDetails_sale_en.json";
import propertiesRentData from "./PropertyJsonData/propertyDetails_rent_en.json";
import PropertyBuyDetailPage from "./Card/PropertyBuyDetailPage";
import PropertyRentDetailPage from "./Card/PropertyRentDetailPage";
import DubaiVerifiedProperties from "./Customer/DubaiVerifiedProperties";
import ListPropertiesBuy from "./Card/ListPropertiesBuy";
import ListPropertiesRent from "./Card/ListPropertiesRent";
import { allpropertiesen } from '../public/locales/buyjson/en/allpropertiesen';
import { allpropertiesar } from '../public/locales/buyjson/ar/allpropertiesar';
import { allpropertiesenrent } from '../public/locales/rentjson/en/allpropertiesenrent';
import { allpropertiesarrent } from '../public/locales/rentjson/ar/allpropertiesarrent';
import { footercontentenglish } from '../public/locales/footer/en/footerenglish';
import { footercontentarabic } from '../public/locales/footer/ar/footerarabic';

import { contactusen } from '../public/locales/contactus/en/contactusenglish';
import { contactusar } from '../public/locales/contactus/ar/contactusarabic';
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  const [saleproperties, setSaleProperties] = useState([]);
  const [rentproperties, setRentProperties] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
    setSaleProperties(propertiesSaleData.saleproperties);
    setRentProperties(propertiesRentData.rentproperties);
  }, [i18n, i18n.language]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLanding />} />
          <Route
            path="/buy-properties"
            element={
              <>
                <NavBar setSelectedLanguage={setSelectedLanguage} />
                <Box
                  mb={4}
                  fontSize={["3xl", "4xl"]}
                  color="darkslategray.200"
                  textAlign="left"
                  position="relative"
                  ml={"7rem"}
                  mt={"10rem"}
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
                <Grid templateColumns="repeat(3, 1fr)" gap={4} px={[1, 2, 4, 8]}>
                  {selectedLanguage === "English"
                    ? allpropertiesen.salepropertiesenglish.map((item, index) => (
                      <ListPropertiesBuy
                        key={index}
                        property={item}
                        setSelectedLanguage={setSelectedLanguage}
                      />
                    ))
                    : allpropertiesar.salepropertiesarabic.map((item, index) => (
                      <ListPropertiesBuy
                        key={index}
                        property={item}
                        setSelectedLanguage={setSelectedLanguage}
                      />
                    ))}
                </Grid>
                {selectedLanguage === 'English'
                  ? footercontentenglish.footerenglish.map((foot, index) => (
                    <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
                  ))
                  : footercontentarabic.footerarabic.map((foot, index) => (
                    <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
                  ))}
              </>
            }
          />

          <Route
            path="/rent-properties"
            element={
              <>
                <NavBar setSelectedLanguage={setSelectedLanguage} />
                <Box
                  mb={4}
                  fontSize={["3xl", "4xl"]}
                  color="darkslategray.200"
                  textAlign="left"
                  position="relative"
                  ml={"7rem"}
                  mt={"10rem"}
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
                <Grid templateColumns="repeat(3, 1fr)" gap={4} px={[1, 2, 4, 8]}>
                  {selectedLanguage === "English"
                    ? allpropertiesenrent.rentpropertiesenglish.map((item, index) => (
                      <ListPropertiesRent
                        key={index}
                        property={item}
                        setSelectedLanguage={setSelectedLanguage}
                      />
                    ))
                    : allpropertiesarrent.rentpropertiesarabic.map((item, index) => (
                      <ListPropertiesRent
                        key={index}
                        property={item}
                        setSelectedLanguage={setSelectedLanguage}
                      />
                    ))}
                </Grid>
                {selectedLanguage === 'English'
                  ? footercontentenglish.footerenglish.map((foot, index) => (
                    <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
                  ))
                  : footercontentarabic.footerarabic.map((foot, index) => (
                    <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
                  ))}
              </>
            }
          />
          <Route path="/dubai-verified-properties" element={<DubaiVerifiedProperties />} />
          <Route path="/buy-a-property" element={<BuyProperty />} />
          <Route
            path="/contact-us"
            element={
              <>
                <NavBar setSelectedLanguage={setSelectedLanguage} />
                {selectedLanguage === "English"
                  ? contactusen.contactusenglish.map((item, index) => (
                    <ContactUs
                      key={index}
                      property={item}
                      setSelectedLanguage={setSelectedLanguage}
                    />
                  ))
                  : contactusar.contactusarabic.map((item, index) => (
                    <ContactUs
                      key={index}
                      property={item}
                      setSelectedLanguage={setSelectedLanguage}
                    />
                  ))}
                {selectedLanguage === 'English'
                  ? footercontentenglish.footerenglish.map((foot, index) => (
                    <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
                  ))
                  : footercontentarabic.footerarabic.map((foot, index) => (
                    <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
                  ))}
              </>

            }
          />
          {/* <Route path="/buy-detail-product-page/:id" element={<PropertyBuyDetailPage saleproperties={saleproperties} />} /> */}
          <Route
            path="/buy-detail-product-page/:id"
            element={
              <>
                <NavBar setSelectedLanguage={setSelectedLanguage} />
                <PropertyBuyDetailPage
                  saleproperties={saleproperties}
                  setSelectedLanguage={setSelectedLanguage}
                />
                {selectedLanguage === 'English'
                  ? footercontentenglish.footerenglish.map((foot, index) => (
                    <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
                  ))
                  : footercontentarabic.footerarabic.map((foot, index) => (
                    <Footer key={index} footer={foot} setSelectedLanguage={setSelectedLanguage} />
                  ))}
              </>
            }
          />
          <Route path="/rent-detail-product-page/:id" element={<PropertyRentDetailPage rentproperties={rentproperties} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
