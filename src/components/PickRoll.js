import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class PickRoll extends React.Component {
  componentDidMount() {
    console.log('coming from pickrol', this.props);
  }
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;
    const {node: post} = posts[0];
    return (
      <div className="container centered" style={{paddingTop: '50px'}}>
        {console.log(post.frontmatter)}
        <div className="is-parent column is-12 show">
          <h1 className="title" style={{color: '#DB4C77'}}>
            Top Picks This Week &bsp;
            <span>{post.frontmatter.date}</span>
          </h1>

          <div
            style={{
              padding: '15px',
              height: '100%',
              backgroundColor: ' #A3B7DA',
              borderRadius: '10px',
              border: '1px solid  #FF7500',
            }}
            key={post.id}>
            <article>
              <header>
                <p className="post-meta">{post.frontmatter.title}</p>
              </header>
              <div className="columns is-multiline">
                {post.frontmatter.featuredimages &&
                  post.frontmatter.featuredimages.map(i => {
                    return (
                      <div className="is-child tile column " key={i.link}>
                        <header>
                          <img src={i.image.childImageSharp.fluid.src} />
                        </header>
                      </div>
                    );
                  })}
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

PickRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PickRollQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "picks-page"}}}
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimages {
                  link
                  image {
                    childImageSharp {
                      fluid(maxWidth: 240, quality: 64) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PickRoll data={data} count={count} />}
  />
);
