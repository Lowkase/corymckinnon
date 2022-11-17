import React from 'react'
import PropTypes from "prop-types";

// BUTTON EMAIL
const ButtonEmail = (props) => {
    return (
        <div class="m-button-con">
            <a 
                className={`m-button ${ props.scheme }`} 
                href={"mailto:" + props.mailAddress}
                rel="noreferrer" 
                tabIndex={props.tabIndex}
                target="_blank">
                <span className="text">{props.text}</span>
            </a>
        </div>
    );
}

ButtonEmail.propTypes = {
    link: PropTypes.string,
    scheme: PropTypes.string,
    tabIndex: PropTypes.string,
    text: PropTypes.string,
};

// SCHEME = className
// PRIMARY = BLUE
// SECONDARY = WHITE
// FOOTER = TRANSPARENT
ButtonEmail.defaultProps = {
    link: '',
    scheme: 'PRIMARY',
    tabIndex: '0',
    text: '',
};

export default ButtonEmail