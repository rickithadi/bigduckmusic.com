import React from 'react';
import PropTypes from 'prop-types';
import {kebabCase} from 'lodash';
import Helmet from 'react-helmet';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import Content, {HTMLContent} from '../components/Content';
import Carousel from 'react-bootstrap/Carousel';

export const GigPostTemplate = ({
  content,
  CarouselPics,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container ">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="top" style={{color: '#f77805'}}>
              {title}
            </h1>
            <p>{description}</p>
            <div className="columns">
              <div className="column is-2">poster</div>
              <div className="column is-8">
                {CarouselPics && (
                  <Carousel>
                    {CarouselPics.map(i => (
                      <Carousel.Item>
                        <img src={i.image.childImageSharp.fluid.src} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </div>
            </div>

            <div className="columns">
              <div
                className="column is-10"
                style={{backgroundColor: '#a3b6de', minHeight: '100vh'}}>
                <PostContent content={content} />
              </div>
              <div className="column">socials</div>
            </div>
            {tags && tags.length ? (
              <div style={{marginTop: `4rem`}}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

GigPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  CarouselPics: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const GigPost = ({data}) => {
  const {markdownRemark: post} = data;
  console.log(post);
  return (
    <Layout>
      <GigPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        CarouselPics={post.frontmatter.Carousel}
        helmet={
          <Helmet titleTemplate="%s | gig">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

GigPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default GigPost;

export const pageQuery = graphql`
  query GigPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        Carousel {
          image {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
