import React from 'react'
import PropTypes from "prop-types";

const SVG = (props) => {
  return (
    <svg className={`${ props.className }`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle fill="#fff" cx="50" cy="50" r="50"/>
      <path fill="#0060F8" d="M74.796 26.432v3.432H62.618v-3.432H60.47V23H77v3.432h-2.204ZM74.796 73.568v-3.432H62.618v3.432H60.47V77H77v-3.432h-2.204ZM53.857 56.292h3.306V43.65h-3.306v-2.23h-3.306v17.16h3.306v-2.288ZM62.563 68.992V56.235H58.32V43.708h4.243v-12.7h12.233v37.984H62.563ZM25.204 26.432v3.432h12.178v-3.432h2.149V23H23v3.432h2.204ZM25.204 73.568v-3.432h12.178v3.432h2.149V77H23v-3.432h2.204ZM46.143 56.292h-3.306V43.65h3.306v-2.23h3.306v17.16h-3.306v-2.288ZM37.437 68.992V56.235h4.243V43.708h-4.243v-12.7H25.204v37.984h12.233Z"/>
    </svg>
  );
}

SVG.propTypes = {
  className: PropTypes.string,
};

export default SVG