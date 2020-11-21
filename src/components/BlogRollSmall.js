import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
class BlogRollSmall extends React.Component {
  move = () => (document.querySelector('body').scrollTop = 0);
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    const shuffled = posts.sort(() => 0.5 - Math.random());

    return (
      <div className="columns ">
        <div className="column is-4">
          <h1 className="head">more like this</h1>
        </div>
        <div class="tile is-ancestor columns is-multiline">
          {shuffled &&
            shuffled.slice(0, 3).map(({node: post}) => (
              <div class="colums is-4 tile is-parent">
                <Link
                  onClick={e => {
                    this.move();
                  }}
                  to={post.fields.slug}
                  style={{paddingTop: '15px', color: 'inherit'}}>
                  <div
                    class="tile is-child card"
                    key={post.id}
                    style={{height: '100%'}}>
                    <div class="card-image">
                      {post.frontmatter.category && (
                        <span className="taggy bike is-pulled-right">
                          {post.frontmatter.category}
                        </span>
                      )}
                      <img
                        //src="https://bulma.io/images/placeholders/1280x960.png"
                        src={post.frontmatter.dispImage}
                        alt="Placeholder image"
                      />
                    </div>
                    <div className="card-header-title">
                      <h2>{post.frontmatter.title}</h2>
                    </div>
                    <div class="card-footer">
                      <p className="biker card-footer-item">
                        {post.frontmatter.date}
                      </p>
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

BlogRollSmall.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollSmallQuery {
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
                templateKey
                date(formatString: "MMMM DD, YYYY")
                category
                featuredpost
                dispImage
                featuredimageo
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollSmall data={data} count={count} />}
  />
);
