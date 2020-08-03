import React from 'react';
import Index from '../pages/contact/index';
import PropTypes from 'prop-types';
import tape1 from '../img/sex/tape1.png';
import heppy from '../img/sex/happ.png';
import hap from '../img/sex/zoot.png';
import tape2 from '../img/sex/tape2.png';
import tape3 from '../img/sex/tape3.png';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';

export const AboutPageTemplate = ({
  title,
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
}) => {
  console.log('bro', body1_2);

  return (
    <Layout>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: 'black',
          color: 'black',
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

            <div class="column is-centered ">
              <img
                src={hap}
                className="cen"
                style={{marginTop: '-5vh', paddingBottom: '10vh'}}
              />
            </div>
          </div>
          <div class="columns is-vcentered ">
            <div
              class="column is-6 is-offset-5 is-vcentered
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
                <img
                  src={tape1}
                  style={{marginTop: '-100px', maxWidth: '90%'}}
                  className="cen"
                />
                <div class="container">
                  <h1 className="idiot">{header1}</h1>

                  <p
                    className="bike"
                    style={{
                      paddingBottom: '15px',

                      color: 'black',
                    }}>
                    {body1}
                  </p>
                  <p
                    className="bike"
                    style={{
                      paddingBottom: '15px',

                      color: 'black',
                    }}>
                    {body1_2}
                  </p>
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
              class="bike"
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
                  <h1 className="idiot">{header2}</h1>
                  <h1 className="idiot">{header2}</h1>
                  <h1 className="idiot">{header2}</h1>

                  <p
                    style={{
                      paddingBottom: '15px',
                      color: 'black',
                    }}
                    className="bike">
                    {body2}
                  </p>
                  <p
                    style={{
                      paddingBottom: '15px',
                      color: 'black',
                    }}
                    className="bike">
                    {body2_2}
                  </p>
                  <p
                    style={{
                      paddingBottom: '15px',
                      color: 'black',
                    }}
                    className="bike">
                    {body2_3}
                  </p>
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
                <h1 className="idiot">{header3}</h1>
                <p style={{paddingBottom: '15px'}} className="bike">
                  {body3}
                </p>
                <p style={{paddingBottom: '15px'}} className="bike">
                  {body3_2}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{background: 'black'}} className=" is-hidden-touch  ">
          <h1 className="homeHeader  " style={{padding: '20px'}}>
            {title}
          </h1>
        </div>
        <section
          className="is-hidden-touch "
          style={{
            height: '100%',
            paddingBottom: '50px',
          }}>
          <div class="cunty" style={{marginTop: '5vh'}}>
            <div class="columns is-vcentered " style={{marginTop: '5vh'}}>
              <div class="column is-5 is-centered"></div>

              <div
                class="column is-6 is-vcentered
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
                  <div class="container bike">
                    <h1 className="idiot bigboi">{header1}</h1>

                    <p style={{paddingBottom: '15px'}} className="bike">
                      {body1}
                    </p>
                    <p style={{paddingBottom: '15px'}} className="bike">
                      {body1_2}
                    </p>
                  </div>
                  <div
                    class="card-image"
                    style={{
                      margin: '0 !important',
                      padding: '0px !important',
                      objectFit: 'cover',
                      width: '100% !important',
                    }}>
                    <img
                      src={heppy}
                      style={{maxWidth: 'none', width: '100%'}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="column is-5 is-offset-1 is-vcentered bike "
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
                  class="container bike"
                  style={{
                    backgroundColor: '#ADFE29',
                    color: 'black',
                    marginTop: '-50px',
                  }}>
                  <h1 className="big">{header2}</h1>
                  <h1 className="big">{header2}</h1>
                  <h1 className="big">{header2}</h1>

                  <p
                    style={{paddingTop: '35px', paddingBottom: '15px'}}
                    className="bike">
                    {body2}
                  </p>
                  <p style={{paddingBottom: '15px'}} className="bike">
                    {body2_2}
                  </p>
                  <p style={{paddingBottom: '15px'}} className="bike">
                    {body2_3}
                  </p>
                </div>
              </div>
            </div>
            <div class="columns is-hidden-touch ">
              <div
                class="column is-3 is-offset-7 is-pulled-right bike"
                style={{
                  marginTop: '-27vh',
                  minHeight: '100%',
                  position: 'relative',
                  paddingBottom: '10vh',
                  paddingRight: '10px',
                  color: 'black',
                  height: '100%',
                  backgroundColor: '#FBFF30',
                }}>
                <img src={tape3} className="tapeSmol cen" />
                <div class="container bike">
                  <h1 className="bigboi idiot">{header3}</h1>
                  <p className="bike" style={{paddingBottom: '15px'}}>
                    {body3}
                  </p>
                  <p className="bike" style={{paddingBottom: '15px'}}>
                    {body3_2}
                  </p>
                </div>
              </div>
            </div>{' '}
          </div>
        </section>
        <section style={{backgroundColor: 'white'}}>
          <Index />
        </section>
      </div>
    </Layout>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data;

  return (
    <Layout>
      <AboutPageTemplate
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
