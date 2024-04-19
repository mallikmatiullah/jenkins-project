
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/1a.jpg";
import image2 from "../assets/2a.jpg";
import image3 from "../assets/3a.jpg";
import image4 from "../assets/4a.jpg";
import image5 from "../assets/5a.jpg";


export const CarouselDefault = () => {
    return (
        <>
            <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={5000}
                transitionTime={1000}
                stopOnHover={false}
                emulateTouch
                dynamicHeight={false}
                useKeyboardArrows
                swipeable
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ background: "#007aff", width: "8px", height: "8px", borderRadius: "50%", display: "inline-block", margin: "0 4px", cursor: "pointer" }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={{ background: "#ccc", width: "8px", height: "8px", borderRadius: "50%", display: "inline-block", margin: "0 4px", cursor: "pointer" }}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                <div>
                    <img
                        src={image1}
                        alt="image 1"
                    />
                </div>
                <div>
                    <img
                        src={image2}
                        alt="image 2"
                    />
                </div>
                <div>
                    <img
                        src={image3}
                        alt="image 3"
                    />
                </div>
                <div>
                    <img
                        src={image4}
                        alt="image 3"
                    />
                </div>
                <div>
                    <img
                        src={image5}
                        alt="image 3"
                    />
                </div>
            </Carousel>
        </>
    );
};
