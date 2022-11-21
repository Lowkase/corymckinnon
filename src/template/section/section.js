import React from 'react';
import PropTypes from "prop-types";

// Section
const Section = (props) => {
    var scheme = "section";
    
    if (props.className) {
        scheme = "section " +  props.className;
    }
    
    return (
        <div className={scheme}>
            { props.children }
        </div>
    );
}

Section.propTypes = {
    className: PropTypes.string,
};

Section.defaultProps = {
    className: '',
};

export default Section