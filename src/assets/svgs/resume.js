import React from 'react'
import PropTypes from "prop-types";

const SVG = (props) => {
    return (
        <svg className={`${ props.className }`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#a)">
                <path d="M.051 4.481a.2.2 0 0 0-.05.155l.67 6.045a.597.597 0 0 0 .33.468c.036.042.09.066.145.066h9.593a.601.601 0 0 0 .595-.524L12 5.44v-.006a.671.671 0 0 0-.008-.078.192.192 0 0 0-.017-.034.197.197 0 0 0-.018-.033.22.22 0 0 0-.026-.023.19.19 0 0 0-.035-.026c-.002 0-.003-.003-.005-.004l-.93-.465-.627-2.8a.2.2 0 0 0-.24-.152L5.191 2.92 3.126.854a.2.2 0 0 0-.283 0L.059 3.639a.2.2 0 0 0 0 .283l.492.492h-.35a.2.2 0 0 0-.15.067Zm10.928 5.836-.599-5.39 1.205.603-.607 4.787ZM10.5 4.54l-.21-.105a.196.196 0 0 0-.116-.015.18.18 0 0 0-.03-.006H9.065l-1.348-.963a.2.2 0 0 0-.302.089l-.314.787-1.2-.686a.2.2 0 0 0-.3.173v.6H4.455l-.197-.875 5.73-1.285.512 2.286Zm-2.123-.126h-.88l.196-.489.684.49Zm-1.93 0h-.446V4.16l.447.255ZM.484 3.78 2.984 1.28 4.73 3.024l-.754.17a.2.2 0 0 0-.152.24l.222.98H1.117L.483 3.78Zm9.482 1.034.063.567a.193.193 0 0 0-.007.034c0 .029.008.057.02.083l.235 2.117H7.001a.2.2 0 1 0 0 .4h3.32l.286 2.578a.2.2 0 0 1-.2.222H1.269a.2.2 0 0 1-.198-.178L.779 8.015H3.8a.2.2 0 1 0 0-.4H.733l-.31-2.8h9.541Z"/>
                <path d="M5.4 8.815a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-1.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2ZM9.202 4.014a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Zm0-.8a.2.2 0 1 1 0 .4.2.2 0 0 1 0-.4ZM3.176 2.073a.2.2 0 0 0-.283 0l-1.6 1.6a.2.2 0 1 0 .282.283l1.6-1.6a.2.2 0 0 0 0-.283ZM3.776 2.673a.2.2 0 0 0-.283 0l-1 1a.2.2 0 1 0 .283.283l1-1a.2.2 0 0 0 0-.283Z"/>
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