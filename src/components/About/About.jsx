import React from "react";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-text">
                        <span className="subtitle about-text__subtitle">
                            Why us?
                        </span>
                        <div className="about-text-description">
                            <p className="description about-text__description">
                                Flexible: Understanding that each visit to
                                Russia might be to glean a different experience,
                                we try our best to create a tailor-made
                                experience for each and every one of our
                                clients.
                            </p>
                            <p className="description about-text__description">
                                Affordable: We guarantee to prove the ideal
                                travel experience that suits your budget and
                                requirements.
                            </p>
                            <p className="description about-text__description">
                                Reliable: Having been in the Tourism market for
                                21 years we have an abundance of experience that
                                allows us to provide our clients with the best
                                service possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
