import React from 'react';
import PropTypes from 'prop-types';

const Five10 = (label, link, year) => {
  console.log(label);
  return '<h1 style="color:red">' + {label} + '</h1>';
};

Five10.propTypes = {
  year: PropTypes.any,
  link: PropTypes.any,
  label: PropTypes.any,
};

export default Five10;
