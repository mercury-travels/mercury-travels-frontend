import React from "react";
import {Helmet} from "react-helmet";

import {Main, About, Mice, ContactUs} from "../components/";

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
	}, []);
	
    return (
        <>
            <Helmet>
                <title>Main page | Mercury Travels</title>
            </Helmet>

            <Main />
            <About />
            <Mice />
            {/* <ContactUs /> */}
        </>
    );
};

export default Home;
