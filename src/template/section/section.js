import React from 'react';
import PropTypes from "prop-types";

// Section
const Section = (props) => {
    return (
        <div className={"section " + props.className}>
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