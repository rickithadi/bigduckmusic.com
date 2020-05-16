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
  CarouselPics,
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
  console.log(poster);

  return (
    <section className="section">
      {helmet || ''}
      <div className="container ">
        <div className="column is-10 is-offset-1">
          <h1 className="top" style={{color: '#f77805'}}>
            {title}
          </h1>
        </div>
        <div className="columns ">
          <div
            className="column is-3 is-offset-1"
            style={{
              textAlign: 'center',
              backgroundColor: '#bc9cce',
              borderRadius: '10px',
              padding: '15px',
              border: '1px solid  #FF7500',
            }}>
            <figure className="image is-3by5">
              <img src={poster.childImageSharp.fluid.src} />
            </figure>
          </div>
          <div className="column is-7">
            {CarouselPics && (
              <Carousel className="carou">
                {CarouselPics.map(i => (
                  <Carousel.Item>
                    <img
                      src={i.image.childImageSharp.fluid.src}
                      className="carou"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </div>
        </div>
        <div className="column is-10 is-offset-1">
          <div className="columns">
            <div className="column">
              <div
                className="head"
                style={{padding: '15px', backgroundColor: '#a3b6de'}}>
                {socials &&
                  socials.map(i => {
                    return <SocialIcon url={i.url} style={{padding: '15px'}} />;
                  })}
              </div>
            </div>

            <div className="column is-10" style={{backgroundColor: '#a3b6de'}}>
              <div style={{height: '100vh'}}>
                <PostContent
                  className="content"
                  content={content}
                  style={{backgroundColor: '#a3b6de', minHeight: '100vh'}}
                />
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
          </div>{' '}
        </div>
        <div className="column" style={{padding: '0px 0px 0px 5px'}}>
          {spotify && (
            <div style={{height: '50%'}}>
              <SpotifyPlayer
                //uri="https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh?si=Om2NVoLUS326G4Yud1cA5g"
                uri={spotify}
                size={{height: '100%', width: '100%'}}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

GigPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  CarouselPics: PropTypes.object,
  description: PropTypes.string,
  poster: PropTypes.object,
  spotify: PropTypes.string,
  socials: PropTypes.array,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const GigPost = ({data}) => {
  const {markdownRemark: post} = data;
  console.log(post);
  return (
    <Layout>
      <GigPostTemplate
        content={post.html}
        socials={post.frontmatter.socials}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        CarouselPics={post.frontmatter.Carousel}
        poster={post.frontmatter.featuredimage}
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
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        socials {
          url
        }

        Carousel {
          image {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
