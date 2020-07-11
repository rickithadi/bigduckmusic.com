import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Content, {HTMLContent} from '../components/Content';

export const AboutPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section aboot">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section" style={{padding: '0'}}>
              <p className="head" style={{paddingBottom: '10px'}}>
                {title}
              </p>
              <div
                style={{
                  backgroundColor: 'grey',
                  padding: '15px',
                }}>
                <PageContent className="content biker" content={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{background: 'transparent',height:'30vh'}}>vova</div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }
`;
