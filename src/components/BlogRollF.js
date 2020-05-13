import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRollF extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          //posts.map(({node: post}) => {
          posts.slice(0, 6).map(({node: post}) => {
            if (!post.frontmatter.isReview) {
              console.log(post);
              return (
                <Link
                  className="is-parent column is-6 show"
                  to={post.fields.slug}>
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
                        <div className="column">
                          <p style={{textAlign: 'left'}}>
                            <Link
                              className="is-size-4 sub"
                              to={post.fields.slug}>
                              <h1 style={{padding: '0px'}} className="top">
                                {post.frontmatter.title}
                              </h1>
                            </Link>
                            <span className="subtitle is-size-9 is-block">
                              {post.frontmatter.date}
                            </span>
                          </p>
                        </div>
                          <div className="column is-pulled-right"

                          style={{textAlign:'right'}}>
                            {post.frontmatter.isReview ? (
                              <span class="tag is-success">Review</span>
                            ) : null}
                            {post.frontmatter.featuredpost ? (
                              <span class="tag is-warning">Featured</span>
                            ) : null}
                        </div>
                      </div>
                      <header>
                        <div className="container content centered">
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
              );
            }
          })}
      </div>
    );
  }
}

BlogRollF.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQueryF {
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
    render={(data, count) => <BlogRollF data={data} count={count} />}
  />
);
