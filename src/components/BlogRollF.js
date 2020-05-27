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
          posts.slice(0, 5).map(({node: post}) => {
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
                        <div className="column is-14">
                          <div className="column is-12">
                            <p style={{textAlign: 'left'}}>
                              <p style={{padding: '0px'}} className="top">
                                {post.frontmatter.title}
                              </p>
                              <span className="subtitle is-size-9 is-block">
                                <p style={{paddingLeft: '10px'}}>
                                  {post.frontmatter.date}
                                </p>
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="column is">
                          <p style={{textAlign: 'right'}}>
                            {post.frontmatter.isReview ? (
                              <span
                                class="tag is-success"
                                style={{margin: '10px !important'}}>
                                >Review
                              </span>
                            ) : null}
                            {post.frontmatter.featuredpost ? (
                              <span class="tag is-warning">Featured</span>
                            ) : null}
                          </p>
                        </div>
                      </div>
                      <header>
                        <div className="container centered">
                          <div className="columns centered">
                            {post.frontmatter.featuredimage ? (
                              <div
                                className="column is-14"
                                style={{
                                  justifyContent: 'center',
                                  textAlign: 'center !important',
                                  alignItems: 'center',
                                }}>
                                <PreviewCompatibleImage
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
                    fluid(maxWidth: 200, maxHeight: 100, quality: 100) {
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
