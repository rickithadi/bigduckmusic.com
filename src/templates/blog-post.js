import React from 'react';
import PropTypes from 'prop-types';
import {SocialIcon} from 'react-social-icons';

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
  date,
  socials,
  featuredimageo,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div style={{backgroundColor: 'black'}}>
      <div
        style={{
          color: 'white',
          backgroundColor: 'black',
          padding: '15px',
        }}
        className="column is-10 is-offset-1">
        <div style={{width: '100vw', height: '100%'}}>
          <img src={featuredimageo} />
        </div>

        <h1
          className="head"
          style={{
            color: 'white',
          }}>
          {title}
        </h1>
        <p className="biker"> Published on {date}</p>
      </div>
      {helmet || ''}

      <div className="columns">
        <div className="column is-8 " style={{backgroundColor: '#a3b6de'}}>
          <div style={{height: '100%', fontFamily: 'Nunito'}}>
            <PostContent
              content={content}
              className="content"
              style={{backgroundColor: '#a3b6de', minHeight: '100vh'}}
            />
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
        <div className="column" style={{padding: '5px 5px 5px 5px'}}>
          {spotify && (
            <SpotifyPlayer
              //uri="https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh?si=Om2NVoLUS326G4Yud1cA5g"
              uri={spotify}
              size={{height: '10%', width: '100%'}}
            />
          )}
        </div>
      </div>
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
