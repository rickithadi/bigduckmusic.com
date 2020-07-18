import React from 'react';
import PropTypes from 'prop-types';
import tape1 from '../img/sex/tape1.png';
import heppy from '../img/sex/happ.png';
import hap from '../img/sex/zoot.png';
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
  body1_2,
  body2,
  body2_2,
  body2_3,
  body3,
  body3_2,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  console.log('bro', body1_2);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'black',
      }}>
      <section
        className="is-hidden-desktop"
        style={{height: '100%', paddingBottom: '50px'}}>
        <div class="columns is-centered ">
          <div class="column">
            <h1 className="homeHeader" style={{padding: '20px'}}>
              {title}
            </h1>
          </div>

          <div class="column is-centered cen">
            <img src={hap} className="cen" style={{marginTop: '-10vh',paddingBottom:'10vh'}} />
          </div>
        </div>
        <div class="columns is-vcentered ">
          <div
            class="column is-6 is-offset-5 is-vcentered chatty
            "
            style={{
              minHeight: '100%',
              color: 'black',
              padding: '0px',
              height: '100%',
            }}>
            <div
              class="card
              ">
              <img src={tape1} style={{marginTop: '-100px'}} className="cen" />
              <div class="container">
                <h1 className="bigboi">{header1}</h1>

                <p style={{paddingBottom: '15px'}}>{body1}</p>
                <p style={{paddingBottom: '15px'}}>{body1_2}</p>
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
        <div class="columns  ">
          <div
            class="bike             "
            style={{
              minHeight: '100%',
              color: 'black',
              padding: '0px',
              height: '100%',
            }}>
            <div
              style={{
                backgroundColor: '#ADFE29',
                paddingBottom: '12vh',
                paddingBottom: '12vh',
              }}
              class="card">
              <img src={tape2} className="cen" style={{marginTop: '-90px'}} />
              <div
                class="container"
                style={{
                  backgroundColor: '#ADFE29',
                }}>
                <h1 className="bigboi">{header2}</h1>

                <p style={{paddingBottom: '15px'}}>{body2}</p>
                <p style={{paddingBottom: '15px'}}>{body2_2}</p>
                <p style={{paddingBottom: '15px'}}>{body2_3}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="columns  ">
          <div
            class="bike"
            style={{
              minHeight: '100%',
              position: 'relative',
              paddingBottom: '10vh',
              paddingRight: '10px',
              color: 'black',
              height: '100%',
              backgroundColor: '#FBFF30',
            }}>
            <img src={tape3} className="tapeSmol cen" />
            <div class="container">
              <h1 className="bigboi">{header3}</h1>
              <p style={{paddingBottom: '15px'}}>{body3}</p>
              <p style={{paddingBottom: '15px'}}>{body3_2}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="aboot is-hidden-touch
"
        style={{height: '100%', paddingBottom: '50px'}}>
        <h1 className="homeHeader" style={{padding: '20px'}}>
          {title}
        </h1>
        <div class="columns is-vcentered " style={{paddingTop: '5vh'}}>
          <div
            class="column is-6 is-offset-5 is-vcentered chatty
            "
            style={{
              minHeight: '100%',
              paddingBottom: '10vh',
              color: 'black',
              height: '100%',
            }}>
            <div
              class="card
            is-hidden-touch
              ">
              <img
                src={tape1}
                className="tape cen"
                style={{paddingTop: '15vh'}}
              />
              <div class="container">
                <h1 className="bigboi">{header1}</h1>

                <p style={{paddingBottom: '15px'}}>{body1}</p>
                <p style={{paddingBottom: '15px'}}>{body1_2}</p>
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
        <div
          class="column is-5 is-offset-1 is-vcentered bike             "
          style={{
            minHeight: '100%',
            paddingBottom: '10vh',
            padding: '20px',
            marginTop: '-20vh',
            position: 'relative',
            color: 'black',
            height: '100%',
          }}>
          <div
            style={{
              backgroundColor: '#ADFE29',
            }}
            class="card">
            <img src={tape2} className="tape cen" />
            <div
              class="container"
              style={{
                backgroundColor: '#ADFE29',
              }}>
              <h1 className="bigboi">{header2}</h1>

              <p style={{paddingBottom: '15px'}}>{body2}</p>
              <p style={{paddingBottom: '15px'}}>{body2_2}</p>
              <p style={{paddingBottom: '15px'}}>{body2_3}</p>
            </div>
          </div>
        </div>
        <div class="columns is-hidden-touch ">
          <div
            class="column is-3 is-offset-7 is-pulled-right bike"
            style={{
              marginTop: '-37vh',
              minHeight: '100%',
              position: 'relative',
              paddingBottom: '10vh',
              paddingRight: '10px',
              color: 'black',
              height: '100%',
              backgroundColor: '#FBFF30',
            }}>
            <img src={tape3} className="tapeSmol cen" />
            <div class="container">
              <h1 className="bigboi">{header3}</h1>
              <p style={{paddingBottom: '15px'}}>{body3}</p>
              <p style={{paddingBottom: '15px'}}>{body3_2}</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{backgroundColor: 'white'}}>contact form</section>
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
        body1_2={post.frontmatter.body1_2}
        body2_2={post.frontmatter.body2_2}
        body2_3={post.frontmatter.body2_3}
        body3_2={post.frontmatter.body3_2}
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
        body1_2
        body2
        body2_2
        body2_3
        body3
        body3_2
      }
    }
  }
`;
