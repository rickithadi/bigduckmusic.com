import React from 'react';
import GigRoll from '../components/GigRollSmall';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import Content, {HTMLContent} from '../components/Content';
import Carousel from 'react-bootstrap/Carousel';

import {SocialIcon} from 'react-social-icons';
import SpotifyPlayer from 'react-spotify-player';
export const GigPostTemplate = ({
  content,
  carousel,
  contentComponent,
  description,
  poster,
  spotify,
  deets,
  date,
  tags,
  socials,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  console.log(carousel);

  return (
    <div>
      <div style={{backgroundColor: 'black'}}>
        <div
          style={{
            color: 'white',
            backgroundColor: 'black',
            padding: '15px',
          }}
          className="column is-10 is-offset-1">
          <h1
            className="head"
            style={{
              color: 'white',
            }}>
            {title}
          </h1>
          <p className="biker"> Published on {date}</p>
        </div>
      </div>
      {helmet || ''}
      <div className="columns">
        <div className="column ">
          {carousel && carousel.length > 0 ? (
            <Carousel indicators={false} controls={true}>
              {carousel.map(i => (
                <Carousel.Item>
                  <figure className="is-2by1 cen">
                    <img style={{height: '50vh', width: '100vw'}} src={i} />
                  </figure>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <div style={{width: '100vw', height: '100%'}}>
              <img src={poster} />
            </div>
          )}
        </div>
      </div>
      <section
        className="section"
        style={{backgroundColor: 'white', padding: '0px'}}>
        <div className="columns">
          <div
            className="column is-4 "
            style={{
              padding: '15px',
              paddingBottom: '10vh',
            }}>
            {deets && (
              <div
                className="circ "
                style={{
                  textAlign: 'left',
                  padding: '15px',
                  lineHeight: '1',
                  height: '20vh',
                  paddingTop: '15px',
                  paddingBottom: '15px',
                  marginBottom: '15px',
                  //border: '1px solid  #FF7500',
                }}>
                <span className="bi">Happening on</span>
                <h4 className="deets"> {deets.date}</h4>
                <p className="bi"> Hosted at</p>
                <h4 className="deets"> {deets.location}</h4>
                <p className="bi"> Line Up</p>
                <h4 className="deets "> {deets.lineup}</h4>

                <p className="bi">PRE-SALE/DOORS</p>
                <h4 className="deets"> {deets.price}</h4>
              </div>
            )}
          </div>
          <div
            className="column biker"
            style={{
              minHeight: '100%',
              padding: '20px !important',
            }}>
            <div
              style={{
                minHeight: '100vh',
                padding: '20px',
                paddingTop: '10vh',
              }}>
              <PostContent className="content" content={content} />
            </div>
            {tags && tags.length ? (
              <div>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="column " class="is-hidden-desktop">
            {spotify && (
              <div
                style={{height: '60vh', padding: '10px'}}
                className="smlj right">
                <SpotifyPlayer
                  uri={spotify}
                  size={{height: '100%', width: '100%'}}
                />
              </div>
            )}
          </div>
          <div className="column " class="is-hidden-touch">
            {spotify && (
              <div
                className="smlj right"
                style={{
                  height: '100vh',

                  padding: '20px',
                  paddingTop: '10vh',
                }}>
                <SpotifyPlayer
                  uri={spotify}
                  size={{height: '90%', width: '80%', right: '0'}}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <hr />
      <section className="section" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="content">
            <GigRoll />
          </div>
        </div>
      </section>
    </div>
  );
};

GigPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  carousel: PropTypes.array,
  description: PropTypes.string,
  poster: PropTypes.string,
  spotify: PropTypes.string,
  socials: PropTypes.array,
  title: PropTypes.string,
  helmet: PropTypes.object,
  deets: PropTypes.object,
};

const GigPost = ({data}) => {
  const {markdownRemark: post} = data;
  console.log(data);
  console.log('post', post);
  return (
    <Layout>
      <GigPostTemplate
        content={post.html}
        test={post.test}
        deets={post.frontmatter.deets}
        socials={post.frontmatter.socials}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        carousel={post.frontmatter.test}
        poster={post.frontmatter.poster}
        spotify={post.frontmatter.spotify}
        helmet={
          <Helmet titleTemplate="%s | Big Duck Gigs">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

GigPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default GigPost;

export const pageQuery = graphql`
  query GigPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        deets {
          location
          price
          date(formatString: "MMMM DD, YYYY")
          lineup
        }
        spotify
        tags
        description
        socials {
          url
        }
        test
        poster
      }
    }
  }
`;
