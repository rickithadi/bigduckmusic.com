import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import logo from '../img/Big Duck_Transparent.png';
import Layout from '../components/Layout';
import PickRoll from '../components/PickRoll';
import BlogRoll from '../components/BlogRoll';
import BlogRollF from '../components/BlogRollF';

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
}) => (
  <div style={{backgroundColor: '#10559A'}}>
    <section style={{height: '100vh', paddingTop: '5%'}}>
      <div className="container centered ">
        <figure className="sub" style={{bottom: '5'}}>
          <img src={logo} style={{height: '50vh', width: '50vh'}} />
        </figure>
      </div>

      <div className="container centered " style={{padding: '5%'}}>
        <h1 className="head">{title}</h1>
        <p className="sub">{subheading}</p>
      </div>
    </section>
    <section
      className="hero is-info is-large"
      style={{backgroundColor: 'pink'}}>
      <div className="columns" style={{textAlign: 'center',color:'#10559A',padding:'15px'}}>
        <div className="column head">Shows</div>
        <div className="column head">Music</div>
        <div className="column head">Community</div>
      </div>

      <div className="hero-body">
        <div className="container">
          <h1 className="top" style={{color: '#10559A'}}>
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
