import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class PickRoll extends React.Component {
  componentDidMount() {
    console.log('coming from pickrol', this.props);
  }
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({node: post}) => (
            <div className="is-parent column is-4 show">
              <div
                style={{
                  padding: '15px',
                  backgroundColor: ' #A3B7DA',
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
                    <p className="post-meta">
                      <Link
                        className="title is-size-4"
                        style={{
                          color: '#FF7500',
                        }}
                        to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <span className="subtitle is-size-9 is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>
                    <br />
                    <br />
                    <Link className="button" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </article>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

PickRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PickRollQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "picks-page"}}}
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimages {
                  link
                  image {
                    childImageSharp {
                      fluid(maxWidth: 240, quality: 64) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PickRoll data={data} count={count} />}
  />
);
