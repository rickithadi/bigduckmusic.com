import React from 'react';
import PropTypes from 'prop-types';
import {GigPostTemplate} from '../../templates/gig-post';

const GigPostPreview = ({entry, widgetFor}) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <GigPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      spotify={entry.getIn(['data', 'spotify'])}
      socials={entry.getIn(['data', 'socials'])}
      CarouselPics={entry.getIn(['data', 'carousel'])}
    />
  );
};

GigPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default GigPostPreview;
