import React from 'react';
import PropTypes from 'prop-types';

const Five10 = (label, link, year) => {
  console.log(label);
  return (
    <div color="red">
      <h1 color="black"> fuck you {label}</h1>
      <h1 color="pink">' {year}</h1>
    </div>
  );
};

Five10.propTypes = {
  year: PropTypes.any,
  link: PropTypes.any,
  label: PropTypes.any,
};

export default Five10;
