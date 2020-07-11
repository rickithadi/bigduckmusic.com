import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
class BlogRollSmall extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    console.log(posts);
    return (
      <div className="columns ">
        <div className="column is-4">
          <h1 className="head">more like this</h1>
        </div>

        {posts &&
          //posts.slice(0, 6).map(({node: post}) => (
          posts.slice(0, 3).map(({node: post}) => (
            <div
              className="is-parent column"
              key={post.id}
              style={{height: '100%'}}>
              <div class="card">
                <div class="card-image">
                    <img
                      src={post.frontmatter.featuredimageo}
                      alt="Placeholder image"
              style={{width: '100%'}}
                    />
                </div>
                <Link
                  to={post.fields.slug}
                  style={{paddingTop: '15px', color: 'inherit'}}>
                  <div class="container" style={{height: '100%'}}>
                    <article className="blog-list-item tile is-child">
                      <div className="columns is-mobile">
                        <p className="top">{post.frontmatter.title}</p>
                      </div>
                      <div className="columns is-mobile clip">
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
                featuredpost
                isReview
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
