import React from 'react';
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
  tags,
  socials,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section" style={{backgroundColor: '#18305e'}}>
      {helmet || ''}
      <div className="container ">
        <div className="column is-10 is-offset-1">
          <h1
            className="head"
            style={{
              color: '#f77805',

              padding: '15px',
            }}>
            {title}
          </h1>
        </div>
        <div className="columns">
          <div className="column " style={{height: '600px'}}>
            {carousel && (
              <Carousel className="carou">
                {carousel.map(i => (
                  <Carousel.Item>
                    {i.image && (
                      <img
                        src={i.image.childImageSharp.fluid.src}
                        className="full-width-image"
                      />
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </div>
        </div>

        <div className="column is-10">
          <div className="columns">
            <div
              className="column is-4 "
              style={{
                padding: '15px',
                paddingTop: '0px',
              }}>
              {poster && (
                <div
                  style={{
                    textAlign: 'center',
                    backgroundColor: '#a3b6de',
                    borderRadius: '10px',
                    padding: '15px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    marginBottom: '15px',
                    //border: '1px solid  #FF7500',
                  }}>
                  <figure className="image is-3by5">
                    <img src={poster} style={{width: '100%', height: '100%'}} />
                  </figure>
                </div>
              )}
              <div className="column" style={{padding: '0px 0px 0px 0px'}}>
                {spotify && (
                  <div style={{height: '50vh'}}>
                    <SpotifyPlayer
                      uri={spotify}
                      size={{height: '100%', width: '100%'}}
                    />
                  </div>
                )}
                {socials && (
                  <div
                    style={{height: '5vh'}}
                    className="head"
                    style={{padding: '15px', backgroundColor: '#a3b6de'}}>
                    {socials.map(i => {
                      return (
                        <SocialIcon url={i.url} style={{padding: '15px'}} />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="column is-10" style={{backgroundColor: '#a3b6de'}}>
              <div className="container" style={{height: '100%'}}>
                <div style={{minHeight: '100vh'}}>
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
            </div>
          </div>{' '}
        </div>
      </div>
    </section>
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
};

const GigPost = ({data}) => {
  const {markdownRemark: post} = data;
  console.log(data);
  console.log('post', post);
  return (
    <Layout>
      <GigPostTemplate
        content={post.html}
        socials={post.frontmatter.socials}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        carousel={post.frontmatter.carousel}
        poster={post.frontmatter.poster.childImageSharp.fluid.src}
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
        spotify
        tags
        description
        poster {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socials {
          url
        }
        carousel {
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
