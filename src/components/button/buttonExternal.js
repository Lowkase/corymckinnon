import React from 'react'
import PropTypes from "prop-types";

import SvgFacebook from "../../assets/svgs/facebook";

// BUTTON EXTERNAL
const ButtonExternal = (props) => {
    // Sample mailto with subject and body
    //<a href="mailto:test@example.com?subject=Testing out mailto!&body=This is only a test!">Example</a>

    return (
        <div class="m-button-con">
            <a 
                className={`m-button ${ props.scheme }`} 
                href={props.link}
                target="_blank"
                rel="noreferrer" 
                tabIndex={props.tabIndex}>
                <SvgFacebook className="icon" />
                <div className="text">{props.text}</div>
            </a>
        </div>
    );
}

ButtonExternal.propTypes = {
    link: PropTypes.string,
    scheme: PropTypes.string,
    tabIndex: PropTypes.string,
    text: PropTypes.string,
};

// SCHEME = className
// PRIMARY = BLUE
// SECONDARY = WHITE
// FOOTER = TRANSPARENT

ButtonExternal.defaultProps = {
    link: '',
    scheme: 'PRIMARY',
    tabIndex: '0',
    text: '',
};

export default ButtonExternal