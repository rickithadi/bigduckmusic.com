import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import PickRoll from '../components/PickRoll';
import BlogRollF from '../components/BlogRollF';

export const IndexPageTemplate = ({title, subheading}) => (
  <div>
    <section style={{backgroundColor: 'black', height: '100vh'}}>

      <div class="columns is-vcentered " >
        <div class="column is-half">
          <p
            className="homeHeader"
            style={{
              textAlign: 'left !important',
              paddingTop: '10vh',
              paddingLeft: '5vw',
              alignItems: 'left',
            }}>
            {subheading}
          </p>
        </div>
          <div class="column is-half"></div>
      </div>
    </section>
    <section
      className="hero is-info is-large"
      style={{backgroundColor: '#18305e', minHeight: '50vh'}}>
      <div
        className="hero-body"
        style={{padding: '10px', paddingBottom: '20px'}}>
        <div className="container">
          <h1 className="topek">Latest Features</h1>

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
