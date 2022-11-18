import React from 'react'
import PropTypes from "prop-types";

const SVG = (props) => {
    return (
        <svg className={`${ props.className }`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"/>
            <path d="M13.563 22H11.32a2.823 2.823 0 0 1-2.82-2.819V12.82A2.823 2.823 0 0 1 11.319 10h2.243a1 1 0 0 1 0 2h-2.243a.82.82 0 0 0-.819.819v6.361a.82.82 0 0 0 .819.819h2.243A1 1 0 0 1 13.563 22zM19.25 22h-.038a1 1 0 0 1-.934-.763l-2.438-10a.999.999 0 1 1 1.943-.473l1.604 6.578 2.161-6.65a1 1 0 0 1 1.902.618l-3.25 10a.998.998 0 0 1-.95.69z"/>
        </svg>
    );
}

SVG.propTypes = {
  className: PropTypes.string,
};

export default SVG