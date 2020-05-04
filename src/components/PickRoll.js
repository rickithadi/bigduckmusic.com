import React from 'react';
import ReactDom from 'react-dom';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import PropTypes from 'prop-types';
import Content, {HTMLContent} from './Content';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';

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
        {console.log(data)}
        <div className="is-parent column is-12 show">
          <h1 className="top" style={{color: '#DB4C77'}}>
            Top Picks This Week, &nbsp;
            <span>{post.frontmatter.date}</span>
          </h1>

          <div
            style={{
              padding: '15px',
              height: '100%',
              backgroundColor: ' #3CA2C8',
              borderRadius: '10px',
              border: '1px solid  #FF7500',
            }}
            key={post.id}>
            <article>
              <div className="columns is-multiline">
                {post.frontmatter.featuredimages &&
                  post.frontmatter.featuredimages.map(i => {
                    return (
                      <div
                        className="is-child tile column "
                        style={{textAlign: 'center'}}
                        key={i.link}>
                        <header>
                          <img src={i.image.childImageSharp.fluid.src} />

                          <div className="sub">
                            {
                              unified()
                                .use(parse)
                                .use(remark2react)
                                .processSync(i.link).result
                            }
                          </div>
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
