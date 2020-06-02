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
  socials,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section
      className="section"
      style={{
        backgroundColor: '#18305e',
      }}>
      {helmet || ''}
      <div className="container ">
        <div className="column is-10 is-offset-1 noisy">
          <h1 className="head" style={{color: '#f77805'}}>
            {title}
          </h1>
        </div>
        <div className="columns">
          <div className="column is-8 " style={{backgroundColor: '#a3b6de'}}>
            <div style={{height: '100%',
               fontFamily:'Nunito'}}>
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

            <div
              style={{height: '50%'}}
              className="head"
              style={{padding: '15px', backgroundColor: '#a3b6de'}}>
              {socials &&
                socials.map(i => {
                  return <SocialIcon url={i.url} style={{padding: '15px'}} />;
                })}
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
        socials {
          url
        }
      }
    }
  }
`;
