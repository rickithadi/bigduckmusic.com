import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class GigRollSmall extends React.Component {
  move = () => (document.querySelector('body').scrollTop = 0);
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    console.log(data);
    const shuffled = posts.sort(() => 0.5 - Math.random());
    return (
      <div className="columns">
        <div className="column is-4">
          <h1 className="head">other gigs</h1>
        </div>

        <div class="tile is-ancestor columns is-multiline">
          {shuffled &&
            shuffled.slice(0, 3).map(({node: post}) => (
              <div class="colums is-4 tile is-parent"
                key={post.id}
                style={{height: '100%'}}>
                <Link
                  onClick={e => {
                    this.move();
                  }}
                  to={post.fields.slug}
                  style={{paddingTop: '15px', color: 'inherit'}}>
                  <div class="avail cen">
                    {!post.frontmatter.test && (
                      <p style={{padding: '2px'}}>UPCOMING</p>
                    )}
                    {post.frontmatter.test && (
                      <p style={{padding: '2px'}}>PAST</p>
                    )}
                  </div>
                  <div class="tile is-child card" style={{border: '0'}}>
                    <div class="card-image">
                      <div style={{margin: 'none !important'}}>
                        <img src={post.frontmatter.featuredimageo} />
                      </div>
                    </div>
                    <div class="container" style={{height: '100%'}}>
                      <div className="card-header-title">
                        <h2>{post.frontmatter.title}</h2>
                      </div>
                      <div class="card-footer">
                        <p className="biker card-footer-item">
                          {post.frontmatter.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

GigRollSmall.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query GigRollSmallQuery {
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
    render={(data, count) => <GigRollSmall data={data} count={count} />}
  />
);
