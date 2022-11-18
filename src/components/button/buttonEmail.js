import React from 'react'
import PropTypes from "prop-types";

// BUTTON EMAIL
const ButtonEmail = (props) => {
    return (
        <a
            className="m-button"
            href={"mailto:" + props.mailAddress}
            rel="noreferrer"
            target="_blank"
            title={props.text}
        >
            { props.svgShow ? (
                props.svgSvg
            ) : (
                props.text
            )}
        </a>
    );
}

ButtonEmail.propTypes = {
    link: PropTypes.string,
    mailAddress: PropTypes.string,
    svgShow: PropTypes.bool,
    svgSvg: PropTypes.any,
    text: PropTypes.string,
};

ButtonEmail.defaultProps = {
    link: '',
    mailAddress: '',
    text: '',
};

export default ButtonEmail