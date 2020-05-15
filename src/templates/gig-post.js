import React from 'react';
import PropTypes from 'prop-types';
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
  spotify,
  tags,
  socials,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  console.log(content);

  return (
    <section className="section">
      {helmet || ''}
      <div className="container ">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="top" style={{color: '#f77805'}}>
              {title}
            </h1>
            <div className="columns">
              <div className="column is-2">poster</div>
              <div className="column is-8">
                {CarouselPics && (
                  <Carousel>
                    {CarouselPics.map(i => (
                      <Carousel.Item>
                        <img src={i.image.childImageSharp.fluid.src} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </div>
            </div>

            <div className="columns">
              <div
                className="column is-10"
                style={{backgroundColor: '#a3b6de'}}>
                <div style={{height: '100vh'}}>
                  <PostContent
                    className="content"
                    content={content}
                    style={{backgroundColor: '#a3b6de', minHeight: '100vh'}}
                  />
                </div>
                <div className="column">
                  <div
                    style={{height: '50%'}}
                    className="head"
                    style={{padding: '15px', backgroundColor: '#a3b6de'}}>
                    {socials &&
                      socials.map(i => {
                        return (
                          <SocialIcon url={i.url} style={{padding: '15px'}} />
                        );
                      })}
                  </div>
                </div>
              </div>
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
        spotify={post.frontmatter.spotify}
        helmet={
          <Helmet titleTemplate="%s | gig">
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
        socials {
          url
        }

        Carousel {
          image {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
