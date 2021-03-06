import React from 'react';
import PropTypes from 'prop-types';
import {SocialIcon} from 'react-social-icons';

import GigRoll from '../components/BlogRollSmall';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import Content, {HTMLContent} from '../components/Content';
import SpotifyPlayer from 'react-spotify-player';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  col,
  spotify,
  author,
  category,
  date,
  featuredimageo,
  dispImage,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <div
        class="is-hidden-desktop"
        style={{
          width: '100vw',
          height: '52vh',
          backgroundImage: `url(${dispImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}>
        <div
          style={{
            padding: '20px',
          }}>
          <h1
            className="sex"
            style={{
              color: 'white',
              paddingTop: '2vh',
              paddingBottom: '3vh',
            }}>
            {title}
          </h1>
          <div
            style={{
              top: '30vh',
              paddingTop: '3vh',
            }}>
            {category && <span className="swaggy ">{category}</span>}
            <p
              className="bikercb"
              style={{
                marginTop: '10px',
                padding: '0px',
                color: `${col}`,
              }}>
              Written by {author}
            </p>
            <p
              className="bikercb"
              style={{
                padding: '0px',
                color: `${col}`,
              }}>
              Published on {date}
            </p>
          </div>
        </div>
      </div>
      <div
        class="is-hidden-touch"
        style={{
          width: '100vw',
          height: '100%',
          backgroundImage: `url(${featuredimageo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div
          style={{
            padding: '20px',
          }}>
          <h1
            className="sex"
            style={{
              color: 'white',
              paddingTop: '10vh',
              paddingBottom: '10vh',
            }}>
            {title}
          </h1>
          {category && (
            <span
              style={{
              }}
              className="swaggy">
              {category}
            </span>
          )}
          <p
            className="bikercb"
            style={{
              marginTop: '10px',
              padding: '0px',
              color: `${col}`,
            }}>
            {' '}
            Written by {author}
          </p>
          <p
            className="bikercb"
            style={{
              padding: '0px',
              color: `${col}`,
            }}>
            {' '}
            Published on {date}
          </p>
        </div>
      </div>

      {helmet || ''}
      <div className="columns is-centered " style={{backgroundColor: 'white'}}>
        <div
          className="column is-6  biker"
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
            {spotify && (
              <SpotifyPlayer
                //uri="https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh?si=Om2NVoLUS326G4Yud1cA5g"
                uri={spotify}
                size={{height: '10%', width: '100%'}}
              />
            )}
          </div>
          {tags && tags.length ? (
            <div>
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link
                      to={`/tags/${kebabCase(tag)}/`}
                      style={{textDecoration: 'underline #18305e'}}>
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
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

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  helmet: PropTypes.object,
  socials: PropTypes.array,
  spotify: PropTypes.string,
  col: PropTypes.string,
  review: PropTypes.bool,
};

const BlogPost = ({data}) => {
  const {markdownRemark: post} = data;

  console.log('got', data);
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        spotify={post.frontmatter.spotify}
        socials={post.frontmatter.socials}
        col={post.frontmatter.col}
        category={post.frontmatter.category}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        featuredimageo={post.frontmatter.featuredimageo}
        dispImage={post.frontmatter.dispImage}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:title" content={`${post.frontmatter.title}`} />

            <meta
              property="og:image"
              content={`${post.frontmatter.dispImage}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        spotify
        category
        title
        author
        description
        col
        featuredimageo
        tags
        dispImage
        socials {
          url
        }
      }
    }
  }
`;
