import React from "react";
import { PropTypes } from "prop-types";


function Label(props) {
  const { children, className, id } = props;
  return (
    <label className={className} htmlFor={id}>
      {children}
    </label>
  );
}


Label.propTypes = {
  children:PropTypes.any,
  className:PropTypes.any,
  id:PropTypes.string
}

export default Label;
