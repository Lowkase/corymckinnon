import React from 'react'
import PropTypes from "prop-types";

const SVG = (props) => {
  return (
    <svg className={`${ props.className }`} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#a)">
        <path fill="#98C0FF" d="M24 43h8v7h-8zM40 27h16v6H40zM0 27h16v6H0zM26 17h16v6H26zM26 23h4v14h-4z"/>
        <path fill="#98C0FF" d="M29 17h19l-5 34H29V17ZM27 28H9.5L13 51h14V28Z"/>
        <path fill="#000" d="M7.408 27.008 5.997 17.5h-4.83V9.333h6.51l4.118-4.13a5.875 5.875 0 0 1 4.13-1.703h24.138c1.54 0 3.045.618 4.13 1.703l4.119 4.13h6.522V17.5h-4.83l-.736 4.888-2.31-.35 1.039-6.871H52.5v-3.5h-5.145L42.55 6.86a3.544 3.544 0 0 0-2.486-1.027H15.925c-.922 0-1.832.374-2.473 1.027l-4.795 4.807H3.5v3.5h4.503l1.704 11.491-2.299.35Z" />
        <path fill="#000" d="M0 25.666h16.333V28H0v-2.334ZM36.167 36.166h-2.334V31.5a5.835 5.835 0 0 1 5.834-5.834H56V28H39.667a3.51 3.51 0 0 0-3.5 3.5v4.666Z" />
        <path fill="#000" d="M42 36.167h-2.333V31.5H56v2.333H42v2.334ZM11.667 15.167h32.666V17.5H11.667v-2.333ZM26.833 21h2.334v25.667h-2.334V21ZM0 31.5h16.333v2.333H0V31.5Z" />
        <path fill="#000" d="M40.787 52.5H15.202c-2.299 0-4.282-1.715-4.62-3.978L8.26 32.842l2.31-.339 2.322 15.68a2.346 2.346 0 0 0 2.31 1.995h25.584a2.354 2.354 0 0 0 2.31-1.995l2.322-15.68 2.31.339-2.322 15.68c-.338 2.263-2.321 3.978-4.62 3.978Z" />
      </g>
      <defs>
        <clipPath id="icon-backflow-a">
          <path fill="#fff" d="M0 0h56v56H0z"/>
        </clipPath>
      </defs>
    </svg>
  );
}

SVG.propTypes = {
  className: PropTypes.string,
};

export default SVG