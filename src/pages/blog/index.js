import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-10"
          style={{
            opacity: '0.8',
            backgroundColor: 'pink',
          }}>
          <div className="text-center" style={{textAlign: 'center'}}>
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 pink, -0.5rem 0 0 pink',
                backgroundColor: 'pink',
                color: 'white',
                padding: '1rem',
              }}>
              Big Duck Blog
              <hr
                style={{
                  height: '0.1em',
                width:'50%',
                  color: 'yellow',
                  background: 'yellow',
                  border: 'none',
                }}
              />
            </h1>
            <p
              style={{
                boxShadow: '0.5rem 0 0 pink, -0.5rem 0 0 pink',
                backgroundColor: 'pink',
                color: 'white',
                padding: '1rem',
              }}>
              Talk Cock sing song
            </p>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
