import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/images/logo-white.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <Link to="/" className="footer-logo__link">
                                <img
                                    src={Logo}
                                    alt="Mercury Travels"
                                    className="footer-logo__img"
                                />
                            </Link>

                            {/* Hi, we are Nagibin's studio */}
                            <div className="nagibinstudio">
                                <a href="https://nagibinstudio.ru">
                                    <img
                                        src="https://api.nagibinstudio.ru:5000/all/nagibin-develompent-en.svg"
                                        alt=""
                                        className="nagibinstudio__img"
                                        style={{
                                            width: "300px",
                                            userSelect: "none",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="footer-top-right">
                            <div className="footer-top-right-contact">
                                <a
                                    href="tel:+79258108106"
                                    className="footer__link"
                                >
                                    +7 925 810 81 06
                                </a>
                                <a
                                    href="tel:+74959302365"
                                    className="footer__link"
                                >
                                    +7 495 930 23 65
                                </a>
                                <a
                                    href="mailto:emma@mercurytravels.ru"
                                    className="footer__link"
                                >
                                    emma@mercurytravels.ru
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-left">
                            <span className="footer__text">
                                © Mercury Travels {new Date().getFullYear()}
                            </span>
                        </div>
                        <div className="footer-bottom-right">
                            <Link to="/policy" className="footer__text">
                                Personal data processing policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
