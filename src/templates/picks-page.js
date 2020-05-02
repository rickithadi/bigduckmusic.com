import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import PickRoll from '../components/PickRoll';
import BlogRoll from '../components/BlogRoll';

export const PicksPageTemplate = ({title}) => (
  <div style={{backgroundColor: '#10559A'}}>{title}</div>
);

PicksPageTemplate.propTypes = {
  title: PropTypes.string,

  featuredimages: PropTypes.array,
};

const PicksPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <PicksPageTemplate
        image={frontmatter.image}
        //featuredimages={frontmatter.intro}
      />
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
        featuredimages {
          link
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
