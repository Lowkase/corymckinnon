import React from 'react'
import PropTypes from "prop-types";

import IconQuote from "../../assets/svgs/quote.js"

// TESTIMONIAL
const Testimonial = (props) => {
    return (
        <div className="m-testimonial">
            <div className="text-con">
                <div className="text">&#34;{props.text}&#34;</div>
                <div className="quote"><IconQuote /></div>
            </div>
            <div className="text-con">
                <div className="person">{props.person}</div>
                <div></div>
            </div>
        </div>
    );
}

Testimonial.propTypes = {
    text: PropTypes.string,
    person: PropTypes.string,
};

export default Testimonial