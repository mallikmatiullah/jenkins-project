import { React, useEffect } from 'react'
import  NavBar  from '../NavBar/Navbar';
import CardViewSell from '../Card/CardViewSell';
import { Box } from '@chakra-ui/react';
import Footer from '../Footer/Footer';

function BuyProperties({ saleproperties, language, t }) {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    },);

    return (
        <>
            <NavBar language={language} />
            <Box mt={"10rem"}>
                <CardViewSell saleproperties={saleproperties} t={t} />
            </Box>
            <Footer />
        </>
    )
}

export default BuyProperties;