import { Box, Text, Icon, Button, Flex, Select, Switch } from "@chakra-ui/react";
import { FaBuilding, FaFilter, FaUsers } from 'react-icons/fa';
import PropertyInfo from "./PropertyInfo";
import StreetInformation from "./StreetInformation";

export default function PropertySaleFilters({ saleproperties, language }) {
    return (
        <>
            <Box
                borderWidth="1px"
                borderRadius="md"
                width={"60%"}
                ml={"5rem"}
                p={4}
                mt={4}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex alignItems="center">
                    <Icon as={FaBuilding} color="gray.500" mr={2} boxSize={6} />
                    <Text fontSize="x-large">{language === "en" ? "Sale Units (20)" : "وحدات (20)"}</Text>
                </Flex>
                <Flex alignItems="center">
                    <Select variant="outline" placeholder={language === "en" ? "Buy" : "شراء"} mr={2}>
                        <option value="buy">{language === "en" ? "Buy" : "شراء"}</option>
                        <option value="rent">{language === "en" ? "Rent" : "إيجار"}</option>
                    </Select>
                    <Select variant="outline" placeholder={language === "en" ? "Type" : "النوع"} mr={2}>
                        <option value="apartment">{language === "en" ? "Apartment" : "شقة"}</option>
                        <option value="villa">{language === "en" ? "Villa" : "فيلا"}</option>
                        <option value="townhouse">{language === "en" ? "Townhouse" : "فيلا متصلة"}</option>
                    </Select>
                    <Select variant="outline" placeholder={language === "en" ? "Bedroom" : "عدد الغرف"} mr={2}>
                        <option value="1">{language === "en" ? "1 Bedroom" : "1 غرفة نوم"}</option>
                        <option value="2">{language === "en" ? "2 Bedrooms" : "2 غرفة نوم"}</option>
                        <option value="3">{language === "en" ? "3 Bedrooms" : "3 غرف نوم"}</option>
                        <option value="4">{language === "en" ? "4 Bedrooms" : "4 غرف نوم"}</option>
                    </Select>
                    <Select variant="outline" placeholder={language === "en" ? "Filters" : "مرشحات"} mr={2}>
                        <option value="feature1">{language === "en" ? "Feature 1" : "ميزة 1"}</option>
                        <option value="feature2">{language === "en" ? "Feature 2" : "ميزة 2"}</option>
                        <option value="feature3">{language === "en" ? "Feature 3" : "ميزة 3"}</option>
                    </Select>
                    {language === "en" ? "Available" : "متاح"} <Switch colorScheme="blue" size="sm" />
                </Flex>

            </Box>
            <PropertyInfo language={language} />
            <PropertyInfo language={language} />
            <PropertyInfo language={language} />
            <StreetInformation saleproperties={saleproperties} language={language} />
        </>
    );
}
