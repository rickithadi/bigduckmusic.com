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
  review,
  spotify,
  category,
  date,
  socials,
  featuredimageo,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  console.log(date);

  return (
    <div>
      <div style={{backgroundColor: 'black', minHeight: '100%'}}>
        <div style={{width: '100vw', height: '52vh'}} className="cen">
          <img src={featuredimageo} style={{width: '100%', height: '100%'}} />
        </div>
        <div
          class="container"
          style={{
            top: '150px',
            left: '50px',
            position: 'absolute',
            color: 'white',
          }}>
          <h1
            className="head"
            style={{
              color: 'white',
            }}>
            {title}
          </h1>
          <p className="biker"> Published on {date}</p>
        </div>
        <div
          class="container"
          style={{
            top: '50vh',
            left: '50px',
            position: 'absolute',
            color: 'white',
          }}>
          {category && <span className="swaggy ">{category}</span>}
        </div>
      </div>
      {helmet || ''}
      <div className="columns is-centered " style={{backgroundColor: 'white'}}>
        <div
          className="column is-6  biker "
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
  helmet: PropTypes.object,
  socials: PropTypes.array,
  spotify: PropTypes.string,
  review: PropTypes.bool,
};

const BlogPost = ({data}) => {
  const {markdownRemark: post} = data;

  console.log('got', data);
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        review={post.frontmatter.isReview}
        spotify={post.frontmatter.spotify}
        socials={post.frontmatter.socials}
        category={post.frontmatter.category}
        date={post.frontmatter.date}
        featuredimageo={post.frontmatter.featuredimageo}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
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
        isReview
        spotify
        category
        title
        description
        featuredimageo
        tags
        socials {
          url
        }
      }
    }
  }
`;
