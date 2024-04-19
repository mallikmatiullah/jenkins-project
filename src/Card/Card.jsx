import React from 'react';
import './Card.css'; // Import your CSS file for styling

const Card = ({ property }) => {
    return (
        <div className="card">
            <img src={property.image} alt={property.title} />
            <div className="card-body">
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <p>Price: {property.price}</p>
                {/* Add more details as needed */}
            </div>
        </div>
    );
};

export default Card;
