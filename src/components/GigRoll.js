import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class GigRoll extends React.Component {
    move = () => (document.querySelector('body').scrollTop = 0);
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    console.log(data);
    return (
      <div
        className="columns is-multiline"
        style={{marginTop: '-8vh', minHeight: '100vh !important'}}>
        {posts &&
          posts.map(({node: post}) => (
            <div
              className="is-parent column is-6 "
              key={post.id}
              style={{height: '100%'}}>
              <div class="avail cen">
                {!post.frontmatter.test && (
                  <p style={{padding: '2px'}}>UPCOMING</p>
                )}
                {post.frontmatter.test && <p style={{padding: '2px'}}>PAST</p>}
              </div>
              <div class="card" style={{border: '0'}}>
                <div class="card-image">
                  <div className="cen" style={{margin: 'none !important'}}>
                    <img src={post.frontmatter.featuredimageo} />
                  </div>
                </div>
                <Link
                  onClick={e => {
                    this.move();
                  }}
                  to={post.fields.slug}
                  style={{paddingTop: '15px', color: 'inherit'}}>
                  <div class="container" style={{height: '100%'}}>
                    <article
                      className="blog-list-item tile is-child"
                      style={{height: '180px'}}>
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
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                test
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
