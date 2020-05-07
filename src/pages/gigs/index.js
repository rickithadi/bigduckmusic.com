import React from 'react';

import Layout from '../../components/Layout';
import GigRoll from '../../components/GigRoll';

export default class gigIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container "
          style={{backgroundColor: '#10559A'}}>
          <div
            className="text-center"
            style={{textAlign: 'center'}}
            style={{
              backgroundColor: 'pink',
              boxShadow: '0.5rem 0 0 pink, -0.5rem 0 0 pink',
              borderRadius: '10px',
            }}>
            <h1
              className="has-text-weight-bold is-size-1 head"
              style={{
                color: '#10559A',
                textDecoration: 'none',
                padding: '1rem',
              }}>
              Big Duck Gigs
            </h1>
            <h2 className="top" style={{color: 'orange'}}>
              Our Main Events! And all our previous ones…
            </h2>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <GigRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
