import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import PickRoll from '../components/PickRoll';
import BlogRollF from '../components/BlogRollF';

export const IndexPageTemplate = ({title, subheading}) => (
  <div style={{backgroundColor: '#18305e'}}>
    <section style={{paddingTop: '3%'}}>
      <div className="full-width-image-container " style={{height: '20%'}}>
        <div
          className="text-center"
          style={{textAlign: 'center'}}
          style={{
            backgroundColor: '#a3b6de',
            padding: '20px',
            boxShadow: '0.5rem 0 0 #a3b6de, -0.5rem 0 0 #a3b6de',
            borderRadius: '10px',
          }}>
          <h1 className="head">{title}</h1>
          <p
            className="sub"
            style={{
              textAlign: 'center !important',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {subheading}
          </p>
        </div>
      </div>
    </section>
    <section
      className="hero is-info is-large"
      style={{backgroundColor: '#18305e'}}>
      <div
        className="hero-body"
        style={{padding: '0px', paddingBottom: '20px'}}>
        <div className="container">
          <h1
            className="top"
            style={{
              color: '#f77805 !important',
            }}>
            Latest Features
          </h1>

          <BlogRollF />
        </div>
      </div>
    </section>

    <PickRoll />
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
};

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        subheading
      }
    }
  }
`;
