import React from 'react'
import PropTypes from "prop-types";

// BUTTON EXTERNAL
const ButtonExternal = (props) => {
    return (
        <div class="m-button-con">
            <a 
                className={`m-button ${ props.scheme }`} 
                href={props.link}
                target="_blank"
                rel="noreferrer" 
                tabIndex={props.tabIndex}>
                <span className="text">{props.text}</span>
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