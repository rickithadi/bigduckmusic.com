import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';

export const PicksPageTemplate = ({title}) => (
  <div style={{backgroundColor: 'white'}}>{title}</div>
);

PicksPageTemplate.propTypes = {
  title: PropTypes.string,
  featuredimageso: PropTypes.array,
};

const PicksPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <PicksPageTemplate image={frontmatter.featuredimageso.image} />
    </Layout>
  );
};

PicksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PicksPage;

export const pageQuery = graphql`
  query PicksPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "picks-page"}}) {
      frontmatter {
        title
        featuredimageso {
          link
          image
        }
      }
    }
  }
`;
