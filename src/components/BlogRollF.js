import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import bg from '../img/sex/FnRBG.png';

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
                      <div className="columns is-mobile">
                        <div className="column is-5">
                          <p style={{textAlign: 'left'}}>
                            <p style={{padding: '0px'}} className="top">
                              {post.frontmatter.title}
                            </p>
                            <span className="subtitle is-size-9 is-block">
                              {post.frontmatter.date}
                            </span>
                          </p>
                        </div>
                        <div className="column ">
                          <p style={{textAlign: 'right', top: '0'}}>
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
                featuredimageo
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollF data={data} count={count} />}
  />
);
