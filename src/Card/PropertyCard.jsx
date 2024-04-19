import React from 'react';
import './Card.css'; // Import your CSS file for styling

const PropertyCard = ({ title, location, bedrooms, size, status, updated, price }) => {
    return (
        <div className="property-card">
            <div className="property-details">
                <h2>{title}</h2>
                <p>{location}</p>
                <p>{bedrooms} Bedrooms</p>
                <p>{size} SQM</p>
                <p>Status: {status}</p>
                <p>Last Updated: {updated}</p>
            </div>
            <div className="price-section">
                <p>Price: SAR {price}</p>
                <button className="request-callback">Request Call Back</button>
            </div>
        </div>
    );
};

export default PropertyCard;
