import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import bg from '../img/sex/FnRBG.png';

class BlogRollF extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    const more = (
      <div style={{textAlign: 'center'}}>
        <Link
          to="/features"
          class="button "
          style={{backgroundColor: 'black', color: 'white'}}>
          Read More
        </Link>
      </div>
    );
    return (
      <div>
        <div className="columns is-multiline">
          {posts &&
            //posts.map(({node: post}) => {
            posts.slice(0, 8).map(({node: post}) => {
              if (!post.frontmatter.isReview) {
                console.log(post);
                return (
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
                );
              }
            })}
        </div>
        {more}
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
