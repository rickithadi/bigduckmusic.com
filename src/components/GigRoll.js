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
    console.log(data);

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
                  <div className="columns is-mobile">
                    <div className="column ">
                      <p style={{textAlign: 'left'}}>
                        <p style={{padding: '0px'}} className="top">
                          {post.frontmatter.title}
                        </p>
                        <span className="subtitle is-size-9 is-block">
                          {post.frontmatter.date}
                        </span>
                      </p>
                    </div>
                    <div className="column-is-1 " style={{textAlign: 'right'}}>
                      <p style={{textAlign: 'right', top: '0'}}>
                        {post.frontmatter.featuredpost ? (
                          <span
                            class="tag is-success"
                            style={{margin: '10px !important'}}>
                            Featured
                          </span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                  {post.frontmatter.featuredimageo ? (
                    <div
                      className="column is-14"
                      style={{
                        justifyContent: 'center',
                        textAlign: 'center !important',
                        alignItems: 'center',
                      }}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimageo,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}

                  <p style={{color: '#18305e', fontFamily: 'Nunito'}}>
                    {post.excerpt}
                  </p>
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
                featuredimageo
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <GigRoll data={data} count={count} />}
  />
);
