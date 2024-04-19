import React, { useEffect } from 'react'
import NavBar from '../NavBar/Navbar';
import CardViewRent from '../Card/CardViewRent';
import { Box } from '@chakra-ui/react';
import Footer from '../Footer/Footer';

function RentProperties({ rentproperties }) {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    },);
    return (
        <>
            <NavBar />
            <Box mt={"10rem"}>
                <CardViewRent rentproperties={rentproperties} />
            </Box>
            <Footer />
        </>
    )
}

export default RentProperties;