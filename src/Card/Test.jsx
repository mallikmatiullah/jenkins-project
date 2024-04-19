import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Test = ({ saleproperties }) => {
    function getSellImagesUrl(name) {
        return new URL(`../assets/salepropertyimages/${name}`, import.meta.url).href;
    }

    // Initialize navigate hook
    const navigate = useNavigate();

    // Function to handle click event and navigate to the next route
    function handleClick(propertyId) {
        // Navigate to the next route with property ID
        navigate(`/nextroute/${propertyId}`);
    }

    // Assuming saleproperties is the array of properties from your JSON data
    const imageUrls = saleproperties.map(property => getSellImagesUrl(property.image));
    console.log("imageUrls", imageUrls);

    return (
        <div>
            <h2>Sale Property Images</h2>
            {imageUrls.map((url, index) => (
                <Link key={index} to={`/nextroute/${saleproperties[index].id}`} onClick={() => handleClick(saleproperties[index].id)}>
                    <img src={url} alt={`Property ${index + 1}`} style={{ width: '200px', height: '200px', margin: '10px' }} />
                </Link>
            ))}
        </div>
    );
};

export default Test;
