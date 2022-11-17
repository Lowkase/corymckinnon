import React from 'react'
import PropTypes from "prop-types";

import SvgEmail from "../../assets/svgs/email";
import SvgPhone from "../../assets/svgs/phone";

// BUTTON
const Button = (props) => {
    // Sample mailto with subject and body
    //<a href="mailto:test@example.com?subject=Testing out mailto!&body=This is only a test!">Example</a>

    return (
        <div class="m-button-con">
            { props.isIcon ? (
                props.isMail ? (
                    <a 
                        className={`m-button ${ props.scheme }`} 
                        href={"mailto:" + props.mailAddress + "?subject=" + props.mailSubject + "&body=" + props.mailBody}
                        rel="noreferrer" 
                        tabIndex={props.tabIndex}
                        target="_blank">
                        <SvgEmail className="icon" />
                        <div className="text">{props.text}</div>
                    </a>
                    ) : (
                    <a 
                        className={`m-button ${ props.scheme }`} 
                        href={"tel:" + props.telephone} 
                        rel="noreferrer" 
                        tabIndex={props.tabIndex}
                        target="_blank">
                        <SvgPhone className="icon" />
                        <div className="text">{props.text}</div>
                    </a>
                )
            ) : (
                <a 
                    className={`m-button ${ props.scheme }`} 
                    href={"mailto:" + props.mailAddress + "?subject=" + props.mailSubject + "&body=" + props.mailBody}
                    rel="noreferrer" 
                    tabIndex={props.tabIndex}
                    target="_blank">
                    {props.text}
                </a>
            )}
        </div>
    );
}

Button.propTypes = {
    isIcon: PropTypes.bool,
    isMail: PropTypes.bool,
    mailAddress: PropTypes.string,
    mailSubject: PropTypes.string,
    mailBody: PropTypes.string,
    scheme: PropTypes.string,
    tabIndex: PropTypes.string,
    telephone: PropTypes.string,
    text: PropTypes.string,
};

// SCHEME = className
// PRIMARY = BLUE
// SECONDARY = WHITE
// FOOTER = TRANSPARENT

Button.defaultProps = {
    isIcon: false,
    isMail: false,
    mailAddress: '',
    mailSubject: '',
    mailBody: '',
    scheme: 'PRIMARY',
    tabIndex: '0',
    telephone: '',
    text: '',
};

export default Button