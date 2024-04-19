import { Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { useState } from "react";
import planMapImage from "../assets/plan-map.png";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import ImageSlider from "./ImageSlider";

const mapContainerStyle = {
    width: '100%',
    height: '400px'
};
const center = {
    lat: -3.745,
    lng: -38.523
};

export default function LocationNearByRent({ saleproperties, language }) {
    const [showMapModal, setShowMapModal] = useState(false);

    const handleViewMap = () => {
        window.open(`${saleproperties.locationURL}`, "_blank");
    };

    return (
        <>
            <Text fontSize="x-large" ml={"5rem"} mt={"2rem"}>{"Location Map"}</Text>
            <Box
                borderWidth="1px"
                borderRadius="md"
                width={"60%"}
                bgImage={`url(${planMapImage})`}
                ml={"5rem"}
                height={"7rem"}
                p={4}
                mt={4}
                position="relative"
            >
                <Button
                    variant="outline"
                    onClick={handleViewMap}
                    position="absolute"
                    top="50%"
                    // background: {#CFB05C}
                    backgroundColor={"#CFB05C"}
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex="1"
                >
                    View On Map
                </Button>
                {/* <Modal isOpen={showMapModal} onClose={handleCloseModal} size="large">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Location & NearBy</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <LoadScript googleMapsApiKey="AIzaSyCsBCsMKJVcCWGNsnDNFJKJ1VJEIag_GBU">

                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={center}
                                    zoom={10}
                                >
                                </GoogleMap>
                            </LoadScript>
                        </ModalBody>
                    </ModalContent>
                </Modal> */}
            </Box>
            <Box>
                {/* <ImageSlider language={language} /> */}
            </Box>
        </>
    );
}
