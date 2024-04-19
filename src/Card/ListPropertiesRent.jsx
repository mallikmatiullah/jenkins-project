import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import CardViewRent from './CardViewRent';

const ListPropertiesRent = ({ property }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.dir = i18n.dir();
        window.scrollTo(0, 0);
    }, [i18n, i18n.language]);

    return (
        <>
            <CardViewRent key={property} property={property} />
        </>
    );
};

export default ListPropertiesRent;
