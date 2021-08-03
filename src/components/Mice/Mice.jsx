import React from "react";

import {MiceItem} from "../";

const Mice = () => {
    const arrMice = [
        {
            subtitle: "Meetings",
            description:
                "Meetings are arranged as per the requirements of our esteemed clients, from conference rooms, to restaurants, to convention halls for larger groups.",
        },
        {
            subtitle: "Incentives",
            description:
                "Our packages across Russia work as wonderful travel gifts for employees, clients and partners alike. With our hospitality, rejuvenation will be evident for any recipient. ",
        },
        {
            subtitle: "Conferences",
            description:
                "The conferences are meant for larger corporations to visit and share knowledge, spanning across several days. These conferences usually have guest speakers as well as key organization members.",
        },
        {
            subtitle: "Exhibitions",
            description:
                "Exhibitions allow for companies and corporations to interact with one another, display key products, and network in a rich potential market.",
        },
    ];

    return (
        <section className="mice" id="mice">
            <div className="container">
                <div className="mice-wrapper">
                    <div className="mice-text-top">
                        <h2 className="title mice-text-top__title">Mice</h2>
                        <p className="description mice-text-top__description">
                            Since the start of the 21st century, Mercury Travels
                            has facilitated business tourism from across the
                            world to Russia’s abundant market. In a country rich
                            with growth and potential, it is a must-visit for
                            any corporation looking into a new market for a
                            lasting impact.
                        </p>
                    </div>
                    <div className="mice-items-wrapper">
                        {arrMice.map((item, index) => (
                            <MiceItem {...item} key={`mice-item-${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mice;
