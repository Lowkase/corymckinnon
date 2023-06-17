import React from 'react'
import PropTypes from "prop-types";

const SVG = (props) => {
    return (
        <svg className={`${ props.className }`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#a)">
                <path d="M4.364 4.91a.545.545 0 1 0 0-1.092.545.545 0 0 0 0 1.091ZM4.91 5.182H3.817v3H4.91v-3Z"/>
                <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm0 11.454A5.454 5.454 0 1 1 6 .546a5.454 5.454 0 0 1 0 10.909Z"/>
                <path d="M7.461 5.182c-.818 0-.916.485-.916.485v-.485h-1.09v3h1.09V6.545s0-.545.464-.545c.272 0 .354.243.354.545v1.637h1.091V6.545c0-.853-.37-1.363-.993-1.363Z"/>
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