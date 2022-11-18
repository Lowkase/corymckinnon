import React from 'react'
import PropTypes from "prop-types";

// BUTTON EXTERNAL
const ButtonExternal = (props) => {
    return (
        <a
            className="m-button"
            href={props.link}
            rel="noreferrer"
            target="_blank"
        >
            { props.svgShow ? (
                props.svgSvg
            ) : (
                props.text
            )}            
        </a>
    );
}

ButtonExternal.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
    svgShow: PropTypes.bool,
    svgSvg: PropTypes.any,
};

ButtonExternal.defaultProps = {
    link: '',
    text: '',
};

export default ButtonExternal