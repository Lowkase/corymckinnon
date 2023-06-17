import React from 'react'
import PropTypes from "prop-types";

const SVG = (props) => {
    return (
        <svg className={`${ props.className }`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#a)">
                <path d="M11.385 2H.615A.617.617 0 0 0 0 2.615v6.77c0 .338.277.615.615.615h10.77A.617.617 0 0 0 12 9.385v-6.77A.617.617 0 0 0 11.385 2Zm-.231.461-4.8 3.6A.6.6 0 0 1 6 6.169a.6.6 0 0 1-.354-.106l-4.8-3.6h10.308ZM8.59 6.3l2.615 3.23.009.01H.786l.009-.01L3.41 6.3a.23.23 0 0 0-.359-.29L.461 9.208V2.75L5.37 6.43c.185.138.41.199.631.2.221-.001.446-.062.63-.2l4.908-3.68v6.458l-2.59-3.2a.23.23 0 1 0-.358.291Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path d="M0 0h12v12H0z"/>
                </clipPath>
            </defs>
        </svg>
    );
}

SVG.propTypes = {
  className: PropTypes.string,
};

export default SVG