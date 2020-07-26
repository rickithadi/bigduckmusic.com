import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Dropdown} from 'react-bulma-components';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  state = {filter: 'all'};
  change = event => {
    console.log('filtering', event);
    this.setState({filter: event.target.value});
  };

  handleChange = event => this.setState({filter: event.target.value});

  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    const dd = (
      <select
        class="custom-select cen"
        value={this.state.filter}
        onChange={this.handleChange}>
        <option class="button " value="all">
          ALL
        </option>
        <option class="button" value="feature">
          FEATURES
        </option>
        <option class="button" value="take">
          TAKES
        </option>

        <option class="button" value="review">
          REVIEWS
        </option>
      </select>
    );

    return (
      <div style={{minHeight: '100vh !important',height:'100%'}}>
        <div className="hold">{dd}</div>
        <div className="columns is-multiline">
          {posts &&
            posts.map(({node: post}) => {
              if (
                post.frontmatter.category === this.state.filter ||
                this.state.filter === 'all'
              ) {
                console.log(post.frontmatter);
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
                );
              }
            })}
        </div>
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
      dispImage
                category
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
