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
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  console.log(PostContent);

  return (
    <section className="section">
      {helmet || ''}
      <div className="container ">
        <div className="columns">
          <div className="column is-10 is-offset-1 noisy">
            <h1 className="top" style={{color: '#f77805'}}>
              {title}
            </h1>
            <div className="columns">
              <div className="column is-8" style={{backgroundColor: '#a3b6de'}}>
                <div style={{height: '100vh'}}>
                  <PostContent
                    content={content}
                    style={{backgroundColor: '#a3b6de', minHeight: '100vh'}}
                  />
                </div>
                {tags && tags.length ? (
                  <div>
                    <ul className="taglist">
                      {tags.map(tag => (
                        <li
                          key={tag + `tag`}
                          style={{backgroundColor: 'white'}}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
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

                <div style={{height: '50%'}}>
                  <SocialIcon url="http://linkedin.com/in/jaketrent" />
                  <SocialIcon url="http://linkedin.com/in/jaketrent" />
                  <SocialIcon url="http://linkedin.com/in/jaketrent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  spotify: PropTypes.string,
  review: PropTypes.bool,
};

const BlogPost = ({data}) => {
  const {markdownRemark: post} = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        review={post.frontmatter.isReview}
        spotify={post.frontmatter.spotify}
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
        tags
      }
    }
  }
`;
