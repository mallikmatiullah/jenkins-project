import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NextRoute = () => {
    const { id } = useParams();
    const [images, setImages] = useState([]);

    // Fetch images from folder 1 based on the property ID
    useEffect(() => {
        // For simplicity, let's assume you have 3 images (image1.jpg, image2.jpg, image3.jpg) in each subfolder
        const fetchImages = async (id) => {
            const fetchedImages = [];
            for (let i = 1; i <= 3; i++) {
                const imageUrl = `/assets/salepropertyimages/${id}/${i}.png`;
                console.log("imageUrl", imageUrl);
                fetchedImages.push(imageUrl);
            }
            setImages(fetchedImages);
        };

        fetchImages(id);
    }, [id]);
    console.log("images", images)

    return (
        <div>
            <h2>Images from Folder {id}</h2>
            {images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '200px', height: '200px', margin: '10px' }} />
            ))}
        </div>
    );
};

export default NextRoute;
