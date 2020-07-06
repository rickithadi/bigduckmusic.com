import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
class BlogRoll extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    console.log(posts);
    return (
      <div className="columns is-multiline">
        {posts &&
          //posts.slice(0, 6).map(({node: post}) => (
          posts.map(({node: post}) => (
            <div
              className="is-parent column is-3 "
              key={post.id}
              style={{height: '100%'}}>
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      //src="https://bulma.io/images/placeholders/1280x960.png"
                      src={post.frontmatter.featuredimageo}
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <Link
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

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
