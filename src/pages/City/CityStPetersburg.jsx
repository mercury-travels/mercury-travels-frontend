import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const CityStPetersburg = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
	}, []);
	
    return (
        <>
            <Helmet>
                <title>St. Petersburg | Mercury Travels</title>
            </Helmet>
            <section className="city">
                <div className="city-block">
                    <div className="container">
                        <div className="city-wrapper">
                            <h2 className="title city__title">
                                St. Petersburg
                            </h2>
                            <p className="description city__description">
                                The old capital of the Russian Empire, St.
                                Petersburg is a much more traditionally European
                                city. It is also widely considered to be the
                                City of Artists, having a slower pace of life
                                and knowledgeable locals that are happy to tell
                                you the story of their city. The city is
                                especially breath-taking and vibrant during the
                                White Nights, when the sun does not set for 10
                                days in June. Considering the historical sites,
                                beautiful canals, and delicious food at very
                                corner, visiting the city is a must when in
                                Russia – making for an unforgettable trip.
                            </p>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://cdni.rbth.com/rbthmedia/images/2019.09/original/5d8b376f15e9f9537427f189.jpg")`,
                        }}
                    ></div>
                </div>

                <div className="city-block">
                    <div className="container">
                        <div className="city-wrapper">
                            <span className="subtitle city__subtitle">
                                Sight
                            </span>
                            <h2 className="title city__title">
                                Alexander Column
                            </h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://grand-piter.ru/gallery_gen/98fa22b2d3c6ef11bd43ccb8a1c259ae_1280x687.80082987552.jpg")`,
                        }}
                    ></div>
                </div>

                <div className="city-block">
                    <div className="container">
                        <div className="city-wrapper">
                            <span className="subtitle city__subtitle">
                                Sight
                            </span>
                            <h2 className="title city__title">
                                The Grand Cascade in Peterhof
                            </h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/f/f5/Grand_Cascade_in_Peterhof_01.jpg")`,
                        }}
                    ></div>
                </div>

                <div className="city-block">
                    <div className="container">
                        <div className="city-wrapper">
                            <span className="subtitle city__subtitle">
                                Sight
                            </span>
                            <h2 className="title city__title">
                                Vasilievsky Island
                            </h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Spb_06-2017_img01_Spit_of_Vasilievsky_Island.jpg/1200px-Spb_06-2017_img01_Spit_of_Vasilievsky_Island.jpg")`,
                        }}
                    ></div>
                </div>

                <div className="city-next">
                    <div className="container">
                        <div className="city-next-wrapper">
                            <span className="subtitle city__subtitle">
                                Next
                            </span>
                            <Link
                                to="/sochi"
                                className="title city-next__title"
                            >
                                Sochi →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CityStPetersburg;
