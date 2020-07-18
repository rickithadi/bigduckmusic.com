import React from 'react';
import PropTypes from 'prop-types';
import tape1 from '../img/sex/tape1.png';
import heppy from '../img/sex/happ.png';
import tape2 from '../img/sex/tape2.png';
import tape3 from '../img/sex/tape3.png';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Content, {HTMLContent} from '../components/Content';

export const AboutPageTemplate = ({
  title,
  content,
  header1,
  header2,
  header3,
  body1,
  body2,
  body3,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  console.log('bro', header1);

  return (
    <div
      style={{minHeight: '100vh'}}
      style={{
        backgroundColor: 'black',
      }}>
      <section className="aboot" style={{minHeight: '100%'}}>
        <h1 className="homeHeader" style={{padding: '20px'}}>
          {title}
        </h1>
        <div class="columns is-vcentered " style={{paddingTop: '15vh'}}>
          <div
            class="column is-6 is-offset-5 is-vcentered chatty
            "
            style={{
              minHeight: '100%',
              paddingBottom: '10vh',
              color: 'black',
              height: '100%',
            }}>
                    <div class="card">
            <img
              src={tape1}
              className="tape cen"
              style={{paddingTop: '15vh'}}
            />
            <div class="container">
              <h1 className="bigboi">{header1}</h1>

              <p>{body1}</p>
            </div>
            <div
              class="card-image"
              style={{
                margin: '0 !important',
                padding: '0px !important',
                objectFit: 'cover',
              }}>
              <img src={heppy} />
            </div>
          </div>
        </div>
        </div>
        <div class="columns is-vcentered " style={{paddingTop: '45vh'}}>
          <div
            class="column is-6  is-vcentered chatty
            "
            style={{
              minHeight: '100%',
              paddingBottom: '10vh',
              color: 'black',
              height: '100%',
              backgroundColor: 'green',
            }}>
            <img src={tape2} className="tape cen" />
            <div class="container">
              <h1 className="bigboi">{header2}</h1>

              <p>{body2}</p>
            </div>
          </div>
        </div>
        <div class="columns is-vcentered " style={{paddingTop: '5vh'}}>
          <div
            class="column is-4 is-offset-7 is-pulled-right chatty"
            style={{
              minHeight: '100%',
              paddingBottom: '10vh',
              color: 'black',
              height: '100%',
              backgroundColor: 'yellow',
            }}>
            <img src={tape3} className="tapeSmol cen" />
            <div class="container">
              <h1 className="bigboi">{header3}</h1>

              <p>{body3}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
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
        header1={post.frontmatter.header1}
        header2={post.frontmatter.header2}
        header3={post.frontmatter.header3}
        body1={post.frontmatter.body1}
        body2={post.frontmatter.body2}
        body3={post.frontmatter.body3}
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
        header1
        header2
        header3
        body1
        body2
        body3
      }
    }
  }
`;
