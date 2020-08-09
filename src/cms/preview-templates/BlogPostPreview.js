import React from 'react';
import PropTypes from 'prop-types';
import {BlogPostTemplate} from '../../templates/blog-post';

const BlogPostPreview = ({entry, widgetFor}) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      spotify={entry.getIn(['data', 'spotify'])}
      //date={entry.getIn(['data', 'date'])}
      category={entry.getIn(['data', 'category'])}
      featuredimageo={entry.getIn(['data', 'featuredimageo'])}
      col={entry.getIn(['data', 'col'])}
      author={entry.getIn(['data', 'author'])}
      dispImage={entry.getIn(['data', 'dispImage'])}
      socials={entry.getIn(['data', 'socials'])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
