import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class GigRoll extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({node: post}) => (
            <Link className="is-parent column is-4" to={post.fields.slug}>
              <div
                style={{
                  padding: '15px',
                  backgroundColor: ' #a3b6de',
                  borderRadius: '10px',
                }}
                key={post.id}>
                <article
                  //className={`blog-list-item tile is-child noisy is-warning ${
                  className={`blog-list-item tile is-child ${
                    post.frontmatter.featuredpost ? 'is-featured ' : ''
                  }`}>
                  <div className="columns">
                    <div className="column is-8">
                      <p style={{textAlign: 'left'}}>
                        <p style={{padding: '0px'}} className="top">
                          {post.frontmatter.title}
                        </p>
                        <span className="subtitle is-size-9 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    </div>
                    <div
                      className="column is-pulled-right"
                      style={{textAlign: 'right'}}>
                      {post.frontmatter.featuredpost ? (
                        <span class="tag is-warning">Featured</span>
                      ) : null}
                    </div>
                  </div>
                  <header>
                    <div className="container centered">
                      <div className="columns centered">
                        {post.frontmatter.featuredimage ? (
                          <div
                            className="column is-12"
                            style={{
                              justifyContent: 'center',
                              textAlign: 'center !important',
                              alignItems: 'center',
                            }}>
                            <PreviewCompatibleImage
                              style={{width: '100%'}}
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                              }}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </header>
                  <p style={{color: '#18305e'}}>{post.excerpt}</p>
                </article>
              </div>
            </Link>
          ))}
      </div>
    );
  }
}

GigRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query GigRollQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "gig-post"}}}
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <GigRoll data={data} count={count} />}
  />
);
