import React from "react";
import {Link, NavLink} from "react-router-dom";

import Logo from "../../assets/images/logo-color.svg";

const Header = () => {
    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;
        console.log(pathname);
        return pathname === "/";
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <Link to="/" className="header-logo">
                        <img
                            src={Logo}
                            alt="Mercury Travels"
                            className="header-logo__img"
                        />
                    </Link>

                    <nav className="header-menu">
                        <NavLink
							to="/"
							className="header-menu__link"
							activeClassName="header-menu__link active"
							isActive={checkActive}
                        >
                            Main page
                        </NavLink>
                        <NavLink
                            to="/moscow"
                            className="header-menu__link"
                            activeClassName="header-menu__link active"
                        >
                            Moscow
                        </NavLink>
                        <NavLink
                            to="/st.petersburg"
                            className="header-menu__link"
                            activeClassName="header-menu__link active"
                        >
                            St. Petersburg
                        </NavLink>
                        <NavLink
                            to="/sochi"
                            className="header-menu__link"
                            activeClassName="header-menu__link active"
                        >
                            Sochi
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
