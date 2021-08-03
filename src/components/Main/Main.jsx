import React from "react";

import Slider from "react-slick";
import "../../assets/slick/slick.css";
import "../../assets/slick/slick-theme.css";

import {MainSlider} from "../";

const Main = () => {
    const arrCity = [
        {
            city: "Moscow",
            url: "moscow",
            image: "https://images.unsplash.com/photo-1599343033072-08d4dfa05600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            city: "St. Petersburg",
            url: "st.petersburg",
            image: "https://cdni.rbth.com/rbthmedia/images/2019.09/original/5d8b376f15e9f9537427f189.jpg",
        },
        {
            city: "Sochi",
            url: "sochi",
            image: "https://images.unsplash.com/photo-1614716520969-dde7f55a241a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
    };

    const sliderRef = React.useRef();

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <section className="main">
            <Slider {...settings} ref={sliderRef}>
                {arrCity.map((city, index) => (
                    <MainSlider
                        key={`main-slider-item-${index}`}
                        {...city}
                        next={nextSlide}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default Main;
