import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import bg from '../img/sex/FnRBG.png';

class BlogRollF extends React.Component {
  state = {isMobile: false};
  componentDidMount = () => {
    let hold = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.setState({isMobile: hold});
  };

  move = () => (document.querySelector('body').scrollTop = 0);
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    let efs = posts.filter(({node: p}) => p.frontmatter.category === 'feature');

    console.log('fets', efs);
    return (
      <div>
        {posts && (
          <div className="columns is-multiline ">
            {!this.state.isMobile
              ? efs.slice(0, 8).map(({node: post}) => {
                  return (
                    <div
                      className="is-parent column is-3 "
                      key={post.id}
                      style={{height: '100%'}}>
                      <div class="card">
                        <div class="card-image">
                          {post.frontmatter.category && (
                            <span className="taggy bike is-pulled-right">
                              {post.frontmatter.category}
                            </span>
                          )}

                          <figure class="image is-4by3">
                            <img
                              //src="https://bulma.io/images/placeholders/1280x960.png"
                              src={post.frontmatter.dispImage}
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <Link
                          onClick={e => {
                            this.move();
                          }}
                          to={post.fields.slug}
                          style={{paddingTop: '15px', color: 'inherit'}}>
                          <div class="container" style={{height: '100%'}}>
                            <article className="blog-list-item tile is-child">
                              <div className="columns is-mobile">
                                <p className="top">{post.frontmatter.title}</p>
                              </div>
                              <div className="columns is-mobile">
                                <p className="bike">"{post.excerpt}"</p>
                              </div>
                            </article>
                          </div>
                        </Link>
                        <p className="biker">{post.frontmatter.date}</p>
                      </div>
                    </div>
                  );
                })
              : efs.slice(0, 4).map(({node: post}) => {
                  return (
                    <div
                      className="is-parent column is-3 "
                      key={post.id}
                      style={{height: '100%'}}>
                      <div class="card">
                        <div class="card-image">
                          {post.frontmatter.category && (
                            <span className="taggy bike is-pulled-right">
                              {post.frontmatter.category}
                            </span>
                          )}

                          <figure class="image is-4by3">
                            <img
                              //src="https://bulma.io/images/placeholders/1280x960.png"
                              src={post.frontmatter.dispImage}
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <Link
                        onClick={e => {
                          this.move();
                        }}
                          to={post.fields.slug}
                          style={{paddingTop: '15px', color: 'inherit'}}>
                          <div class="container" style={{height: '100%'}}>
                            <article className="blog-list-item tile is-child">
                              <div className="columns is-mobile">
                                <p className="top">{post.frontmatter.title}</p>
                              </div>
                              <div className="columns is-mobile">
                                <p className="bike">"{post.excerpt}"</p>
                              </div>
                            </article>
                          </div>
                        </Link>
                        <p className="biker">{post.frontmatter.date}</p>
                      </div>
                    </div>
                  );
                })}
          </div>
        )}
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
              excerpt(pruneLength: 80)
              id
              fields {
                slug
              }
              frontmatter {
                title
                category
                templateKey
                date(formatString: "MMMM DD, YYYY")
                dispImage
                featuredpost
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
