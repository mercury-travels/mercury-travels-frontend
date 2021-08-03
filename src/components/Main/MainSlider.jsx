import React from "react";
import {Link} from "react-router-dom";

const MainSlider = ({city, url, image, next}) => {
    return (
        <div className="main-slider">
            <div className="main-slider-item">
                <div className="container">
                    <div className="main-slider-item-wrapper">
                        <div className="main-slider-item-text">
                            <Link to={`/${url}`}>
                                <h2 className="title main-slider-item-text__title">
                                    {city}
                                </h2>
                            </Link>
                            <Link
                                to={`/${url}`}
                                className="btn main-slider-item-text__btn"
                            >
                                More
                                <svg
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.4277 5.32233C22.4277 4.90812 22.0919 4.57233 21.6777 4.57233L14.9277 4.57233C14.5135 4.57233 14.1777 4.90812 14.1777 5.32233C14.1777 5.73654 14.5135 6.07233 14.9277 6.07233L20.9277 6.07233L20.9277 12.0723C20.9277 12.4865 21.2635 12.8223 21.6777 12.8223C22.0919 12.8223 22.4277 12.4865 22.4277 12.0723L22.4277 5.32233ZM4.53033 23.5303L22.208 5.85266L21.1473 4.792L3.46967 22.4697L4.53033 23.5303Z"
                                        fill="#FF0000"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <div className="main-slider-item-next" onClick={next}>
                            Next city →
                        </div>
                    </div>
                </div>
                <Link to={`/${url}`}>
                    <div
                        className="main-slider-item-img"
                        style={{
                            backgroundImage: `url("${image}")`,
                        }}
                    ></div>
                </Link>
            </div>
        </div>
    );
};

export default MainSlider;
