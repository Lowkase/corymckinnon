import React from 'react'
import PropTypes from "prop-types";

const SVG = (props) => {
    return (
        <svg className={`${ props.className }`} viewBox="0 0 22 22" fill="#0060F8" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.583 11.113 22 15.802V6.226l-7.417 4.887ZM0 6.226V15.8l7.417-4.688L0 6.226ZM20.625 3.438H1.375c-.686 0-1.23.511-1.334 1.17L11 11.828l10.959-7.22c-.103-.659-.648-1.17-1.334-1.17ZM13.324 11.943l-1.946 1.282a.687.687 0 0 1-.756 0l-1.946-1.283-8.632 5.46c.106.653.648 1.16 1.33 1.16h19.25c.684 0 1.226-.507 1.332-1.16l-8.632-5.459Z"/>
        </svg>
    );
}

SVG.propTypes = {
  className: PropTypes.string,
};

export default SVG