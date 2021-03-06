import React from 'react';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import Layout from '../../components/Layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: {group},
    site: {
      siteMetadata: {title},
    },
  },
}) => (
  <Layout>
    <section
      className="section"
      style={{
        backgroundColor: 'white',
        minHeight: '90vh',
      }}>
      <Helmet title={`Tags | ${title}`} />
      <div className="container content biker" style={{height: '100%'}}>
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{marginBottom: '6rem'}}>
            <h1 className="title is-bold-light">Tags</h1>
            <ul className="taglist">
              {group.map(tag => (
                <p className="biker" key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <p className="biker">
                      {tag.fieldValue} ({tag.totalCount})
                    </p>
                  </Link>
                </p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
