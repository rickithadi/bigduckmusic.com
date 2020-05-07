import React from 'react';
import ReactMarkdown from 'react-markdown';
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
      <div className="container centered" style={{paddingTop: '15px',minHeight:'100%',height:'100vh'}}>
        <div className="column is-12 ">
          <h1
            className="sub"
            style={{paddingBottom: '25px', fontSize: 'X-large'}}>
            Top Picks This Week, &nbsp;
            <span>{post.frontmatter.date}</span>
          </h1>

          <div key={post.id}>
            <div className="columns is-multiline ">
              {post.frontmatter.featuredimages &&
                post.frontmatter.featuredimages.map(i => {
                  return (
                    <div className="is-parent column " key={i.link}>
                      <a href={`https://${i.link}`} target="_blank">
                        <article
                          key={i.link}
                          style={{
                            textAlign: 'center',
                            backgroundColor: 'pink',
                            borderRadius: '10px',
                            padding: '15px',
                            border: '1px solid  #FF7500',
                          }}>
                          <figure className="image ">
                            <img src={i.image.childImageSharp.fluid.src} />
                          </figure>
                        </article>
                      </a>
                    </div>
                  );
                })}
            </div>
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
                      fluid(maxWidth: 240, quality: 100) {
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
