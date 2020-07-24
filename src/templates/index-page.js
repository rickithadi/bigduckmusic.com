import React from 'react';
import cunt from '../img/sex/wordStar.png';
import arrow from '../img/sex/arrow.png';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/Layout';
import PickRoll from '../components/PickRoll';
import BlogRollF from '../components/BlogRollF';
import picks from '../img/sex/picks.svg';
import tra from '../img/sex/trans.png';

export const IndexPageTemplate = ({title, subheading}) => (
  <div style={{minHeight: '100%'}}>
    <section
      style={{
        backgroundColor: 'black',
        paddingTop: '2vh',
        paddingBottom: '20vh',
      }}
      className="home">
      <div class="columns is-vcentered is-mobile">
        <div
          class="column is-6 is-offset-1 is-vcentered"
          style={{minHeight: '100%', paddingBottom: '10vh'}}>
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
      className="topek hero is-large  "
      style={{minHeight: '100vh', paddingTop: '5vh'}}>
      <div
        class="columns is-vcentered is-mobile is-hidden-desktop  "
        style={{marginTop: '-250px'}}>
        <div class="columns is-vcentered is-mobile" style={{marginTop: '5px'}}>
          <div class="column  is-vcentered">
            <img
              class="is-vcentered cen"
              src={arrow}
              style={{paddingLeft: '50%'}}
            />

            <img src={cunt} alt="big duck" style={{paddingLeft: '10%'}} />
          </div>
        </div>
      </div>

      <div
        class="columns is-vcentered is-hidden-touch  "
        style={{marginTop: '20px'}}>
        <div
          class="columns is-vcentered is-mobile"
          style={{marginTop: '-250px'}}>
          <div class="column  is-vcentered">
            <img src={cunt} alt="big duck" />
          </div>
        </div>
      </div>

      <div
        className="hero-body"
        style={{padding: '10px', paddingBottom: '20px', marginTop: '-30px'}}>
        <div className="container">
          <BlogRollF />
        </div>
        <div style={{textAlign: 'center', paddingTop: '5vh'}}>
          <Link
            to="/features"
            class="button "
            style={{backgroundColor: 'black', color: 'white'}}>
            Read More{' '}
          </Link>
        </div>
      </div>
    </section>

    <section style={{backgroundColor: 'black'}}>
      <img
        src={picks}
        style={{width: '100%', maxWidth: 'none'}}
        class="is-hidden-touch"
      />
      <div
        class="is-hidden-desktop"
        style={{width: '100vw', overflow: 'hidden'}}>
        <img src={picks} style={{height: '100%',   maxWidth: 'none'}} />
      </div>
      <div style={{height: '100%'}}>
        <PickRoll />
      </div>
      <div style={{height: '100%', background: '#000000'}}>
        <img style={{width: '100vw'}} class="is-vcentered cen" src={tra} />
      </div>
      <div className="contribute">
        <div class="columns is-vcentered ">
          <div
            class="column  is-offset-1 is-vcentered"
            style={{minHeight: '100%'}}>
            <div class="columns ">
              <div
                class="column  is-pulled-right is-hidden-desktop"
                style={{paddingRight: '10vw'}}>
                <span className="dot "></span>
                <span className="doti"></span>
              </div>
              <div class="column is-mobile is-vcentered is-offset-1">
                <h3 className="head" style={{padding: '10px'}}>
                  want to contribute?
                </h3>
                <div class="columns ">
                  <div
                    class="column is-pulled-right is-hidden-touch"
                    style={{paddingLeft: '46px', paddingTop: '26px'}}>
                    <span className="dot "></span>
                    <span className="doti"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="column is-4 is-offset-1 is-vcentered"
            style={{
              minHeight: '100%',
              paddingLeft: '29px',
            }}>
            <p className="bike">
              Like what you see? Want to be featured or collaborate with us?
              Drop us a message and get a chance to work with the team!
            </p>
          </div>

          <div
            style={{
              minHeight: '100%',
              paddingLeft: '29px',
              paddingBottom: '29px',
            }}
            class="column has-text-centered is-vcentered">
            <Link
              to="/about"
              class="button "
              style={{
                backgroundColor: 'black',
                paddingRight: '29px',
                borderRadius: '10px',
                padding: '20px',
                borderColor: 'black',
                color: 'white',
              }}>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
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
