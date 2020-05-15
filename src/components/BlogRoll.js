import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
class BlogRoll extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          //posts.slice(0, 6).map(({node: post}) => (
          posts.map(({node: post}) => (
            <Link className="is-parent column is-6 show" to={post.fields.slug}>
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
                          <h1 style={{padding: '0px'}} className="top">
                            {post.frontmatter.title}
                          </h1>
                        <span className="subtitle is-size-9 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    </div>
                    <div
                      className="column is-pulled-right"
                      style={{textAlign: 'right'}}>
                      {post.frontmatter.isReview ? (
                        <span class="tag is-success">Review</span>
                      ) : null}
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
                            className="column is-6"
                            style={{
                              justifyContent: 'center',
                              textAlign: 'center !important',
                              alignItems: 'center',
                            }}>
                            <div className="featured-thumbnail">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.featuredimage,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                }}
                              />
                            </div>
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

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
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
                isReview
                featuredimage {
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
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
