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
      <div
        className="container centered"
        style={{padding: '5px', minHeight: '100%'}}>
        <div className="column is-12 ">
          <h1
            className="topek cen"
            style={{paddingBottom: '25px', fontSize: 'X-large'}}>
            Top Picks This Week, &nbsp;
            <span>{post.frontmatter.date}</span>
          </h1>

          <div key={post.id}>
            <div className="columns is-multiline is-mobile is-2 cen">
              {post.frontmatter.featuredimageso &&
                post.frontmatter.featuredimageso.map(i => {
                  return (
                    <div
                      className="column is-4-mobile "
                      key={i.link}
                      style={{flexGrow: '0', padding: '10px'}}>
                      <a
                        className="cen"
                        href={i.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <figure
                          key={i.link}
                          className="is-square"
                          style={{
                            textAlign: 'center',
                            backgroundColor: '#bc9cce',
                            borderRadius: '10px',
                            padding: '5px',
                            border: '1px solid  #FF7500',

                            height: '100px',
                            width: '100px',
                          }}>
                          <img
                            src={i.image}
                            style={{height: '100%', width: '100%'}}
                          />
                        </figure>
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
                featuredimageso {
                  link
                  image
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
