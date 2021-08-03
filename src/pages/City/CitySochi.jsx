import React from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const CitySochi = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
	}, []);
	
    return (
        <>
            <Helmet>
                <title>Sochi | Mercury Travels</title>
            </Helmet>
            <section className="city">
                <div className="city-block">
                    <div className="container">
                        <div className="city-wrapper">
                            <h2 className="title city__title">Sochi</h2>
                            <p className="description city__description">
                                Sochi is Russia’s unofficial Summer Capital and
                                its main resort town. It has a wide spread of
                                landscapes – mountainous regions, lush forests,
                                historical caves and beaches in close proximity.
                                The summer season is ideal for a holiday to
                                swim, relax, or go on adventure tourism –
                                there’s something for everybody!
                            </p>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://images.unsplash.com/photo-1614716520969-dde7f55a241a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`,
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
                                Canyon "White Rocks"
                            </h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://static.tildacdn.com/tild6664-3938-4634-a636-333035313136/belye-skaly-sochi-19.jpg")`,
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
                                Sochi Marine Terminal
                            </h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/7/79/%D0%9C%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9_%D0%BF%D0%BE%D1%80%D1%82_%D0%A1%D0%BE%D1%87%D0%B8_%D0%B8_%D0%BF%D1%80%D0%B8%D0%BB%D0%B5%D0%B3%D0%B0%D1%8E%D1%89%D0%B0%D1%8F_%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F_04.jpg")`,
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
                                Sochi Olympic Park
                            </h2>
                        </div>
                    </div>
                    <div
                        className="city-img"
                        style={{
                            backgroundImage: `url("http://img.29palms.ru/photo/hotels/russia/sochi/olympic-park/resized/001_Rossiya_Sochi_Panorama_Olimpiyskogo_parka_Sochi_Olympic_Park_-_Fisht_Stadium_Olympic_flame_Iceberg_Puck_Adler_Arena_Sochi_Park_amusement_Foto_dmzotov80-D.jpg")`,
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
                                to="/moscow"
                                className="title city-next__title"
                            >
                                Moscow →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CitySochi;
