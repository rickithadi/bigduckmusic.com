import React from 'react';
import PropTypes from 'prop-types';
import {AboutPageTemplate} from '../../templates/about-page';

const AboutPagePreview = ({entry, widgetFor}) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    header1={entry.getIn(['data', 'header1'])}
    header2={entry.getIn(['data', 'header2'])}
    header3={entry.getIn(['data', 'header3'])}
    body1={entry.getIn(['data', 'body1'])}
    body1_2={entry.getIn(['data', 'body1_2'])}
    body2={entry.getIn(['data', 'body2'])}
    body2_2={entry.getIn(['data', 'body2_2'])}
    body2_3={entry.getIn(['data', 'body2_3'])}
    body3={entry.getIn(['data', 'body3'])}
    body3_2={entry.getIn(['data', 'body3_2'])}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
