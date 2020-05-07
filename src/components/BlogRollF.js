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
                <div className="is-parent column is-6 show">
                  <div
                    style={{
                      padding: '15px',
                      backgroundColor: ' #10559A',
                      borderRadius: '10px',
                      border: '1px solid  #FF7500',
                    }}
                    key={post.id}>
                    <article
                      //className={`blog-list-item tile is-child noisy is-warning ${
                      className={`blog-list-item tile is-child noisy ${
                        post.frontmatter.featuredpost ? 'is-featured ' : ''
                      }`}>
                      <header>
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: post.frontmatter.featuredimage,
                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                              }}
                            />
                          </div>
                        ) : null}

                        <p>
                          <Link className="is-size-4 sub" to={post.fields.slug}>
                            <h1 className="top">{post.frontmatter.title}</h1>
                          </Link>

                          <span className="subtitle is-size-9 is-block">
                            {post.frontmatter.date}
                          </span>
                        </p>
                      </header>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <div className="columns">
                          <div className="column">
                            <Link className="button" to={post.fields.slug}>
                              Keep Reading →
                            </Link>
                          </div>
                          <div className="column">
                            <div class="media-right">
                              {post.frontmatter.isReview ? (
                                <span class="tag is-success">Review</span>
                              ) : null}
                              {post.frontmatter.featuredpost ? (
                                <span class="tag is-warning">Featured</span>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </p>
                    </article>
                  </div>
                </div>
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
