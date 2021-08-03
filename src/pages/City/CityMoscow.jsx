import React from "react";
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

const CityMoscow = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Moscow | Mercury Travels</title>
            </Helmet>
            <section className="city">
                <div className="city-block">
                    <div className="container">
                        <div className="city-wrapper">
                            <h2 className="title city__title">Moscow</h2>
                            <p className="description city__description">
                                Russia’s capital is its largest city, and is
                                considered by many to be the center of life and
                                culture. The remnants of Russia’s rich history
                                litters every street, creating a confluence
                                between the old and the new, the west and the
                                east. The sprawling city is easy to traverse on
                                foot due to its expansive metro system, allowing
                                for any visitor to experience various cultures,
                                histories, and futures – all at once.
                            </p>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://images.unsplash.com/photo-1599343033072-08d4dfa05600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`,
                        }}
                    ></div>
                </div>

                <div className="city-block">
                    <div className="container">
                        <div className="city-wrapper">
                            <span className="subtitle city__subtitle">
                                Sight
                            </span>
                            <h2 className="title city__title">Red Square</h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://images.unsplash.com/photo-1559031230-b99456c7da6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1870&q=80")`,
                        }}
                    ></div>
                </div>

                <div className="city-block">
                    <div className="container">
                        <div className="city-wrapper">
                            <span className="subtitle city__subtitle">
                                Sight
                            </span>
                            <h2 className="title city__title">Arbat</h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/9/98/Arbat_Street_in_MSK.jpg")`,
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
                                The Bolshoi Theatre
                            </h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://img.gazeta.ru/files3/105/12370105/RIAN_5658667.HR-pic4_zoom-1500x1500-59698.jpg")`,
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
                                to="/st.petersburg"
                                className="title city-next__title"
                            >
                                St. Petersburg →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CityMoscow;
