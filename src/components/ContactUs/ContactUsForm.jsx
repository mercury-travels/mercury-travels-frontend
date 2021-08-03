import React from "react";
import {Link} from "react-router-dom";
import {reduxForm, Field} from "redux-form";

import validate from "./validate";

import {RednerInput, RednerInputAutoSize} from "../";

let ContactUsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="contactus-form">
            <div className="contactus-form-input">
                <Field component={RednerInput} label="Name" name="name" />
            </div>
            <div className="contactus-form-input">
                <Field component={RednerInput} label="Email" name="email" />
            </div>
            <div className="contactus-form-input">
                <Field
                    component={RednerInputAutoSize}
                    label="Your wishes"
                    name="wishes"
                />
            </div>
            <button className="btn contactus-form__btn">
                Submit
                <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22.4277 5.32233C22.4277 4.90812 22.0919 4.57233 21.6777 4.57233L14.9277 4.57233C14.5135 4.57233 14.1777 4.90812 14.1777 5.32233C14.1777 5.73654 14.5135 6.07233 14.9277 6.07233L20.9277 6.07233L20.9277 12.0723C20.9277 12.4865 21.2635 12.8223 21.6777 12.8223C22.0919 12.8223 22.4277 12.4865 22.4277 12.0723L22.4277 5.32233ZM4.53033 23.5303L22.208 5.85266L21.1473 4.792L3.46967 22.4697L4.53033 23.5303Z"
                        fill="#FF0000"
                    />
                </svg>
            </button>
            <p className="contactus-form__description">
                By clicking on the button, you <Link to="/policy">consent</Link>{" "}
                to the processing of personal data and agree to the privacy
                policy.
            </p>
        </form>
    );
};

ContactUsForm = reduxForm({
    form: "contactus-form",
    validate,
})(ContactUsForm);

export default ContactUsForm;
