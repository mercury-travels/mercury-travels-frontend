import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {sendContactus} from "../../redux/actions/contactus";

import {ContactUsForm} from "../";

const ContactUs = () => {
    const dispatch = useDispatch();

    const {success} = useSelector(({contactus}) => contactus);

    const onSubmit = (data) => {
        dispatch(
            sendContactus({
                name: data.name,
                email: data.email,
                wishes: data.wishes,
            })
        );
    };

    return (
        <section className="contactus" id="contactus">
            <div className="container">
                <div className="contactus-wrapper">
                    <h2 className="contactus__title">Contact Us</h2>

                    {success ? (
                        <div className="contactus-thankyou">
                            <p className="description contactus-thankyou__description">
                                <span> Your application has been accepted</span>
                                , we will contact you shortly
                            </p>
                        </div>
                    ) : (
                        <ContactUsForm onSubmit={onSubmit} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
