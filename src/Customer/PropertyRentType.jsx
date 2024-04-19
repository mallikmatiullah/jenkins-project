import React from 'react';
import { Box, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { FaBuilding, FaUsers } from 'react-icons/fa';
import PropertyRentFilters from './PropertyRentFilters';
import LocationNearByRent from './LocationNearByRent';
import StreetRentInformation from './StreetRentInformation';

function PropertyRentType({ language }) {
    return (
        <>
            <LocationNearByRent />
            <StreetRentInformation />
        </>
    )
}

export default PropertyRentType