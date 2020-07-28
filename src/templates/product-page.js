import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const ProductPageTemplate = ({}) => <div className="content"></div>;

ProductPageTemplate.propTypes = {};

const ProductPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return <Layout></Layout>;
};

ProductPage.propTypes = {
  data: PropTypes.shape({}),
};

export default ProductPage;

