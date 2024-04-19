// PropertyDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetailPage({ saleproperties }) {
    const { id } = useParams();
    const property = saleproperties.find(property => property.id === parseInt(id));

    if (!property) {
        return <div>Property not found</div>;
    }

    return (
        <>
            <div>
                {/* Render the details of the property */}
                <h1>{property.title}</h1>
                <p>{property.location}</p>
                {/* Add more details as needed */}
            </div>
        </>
    );
}

export default PropertyDetailPage;
