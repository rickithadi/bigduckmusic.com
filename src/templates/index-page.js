import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import PickRoll from '../components/PickRoll';
import BlogRollF from '../components/BlogRollF';
import duck from '../img/sex/Group.png';

export const IndexPageTemplate = ({title, subheading}) => (
  <div>
    <section
      style={{backgroundColor: 'black',minHeight:'100vh'}}
      className="home">
      <div class="columns is-vcentered is-mobile">
        <div
          class="column is-6 is-offset-1 is-vcentered"
          style={{height: '100%'}}>
          <p
            className="homeHeader"
            style={{
              textAlign: 'left !important',
              alignItems: 'left',
            }}>
            {subheading}
          </p>
        </div>
      </div>

    </section>

    <section
      className="topek hero is-large"
      style={{ minHeight: '100vh',paddingTop:'10vh'}}>
      <div
        className="hero-body"
        style={{padding: '10px', paddingBottom: '20px'}}>
        <div className="container">
          <h1 >Latest Features</h1>

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
