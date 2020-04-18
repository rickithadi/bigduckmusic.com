import React from 'react';

import Layout from '../../components/Layout';
import FeatureRoll from '../../components/FeatureRoll';

export default class FeaturesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            opacity: '0.8',
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
              Big Duck Features
              <hr
                style={{
                  height: '0.1em',
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
              Reviewing all things Heavy, from Stoner Rock to Doom without
              forgetting the Psychedelic and Sludgier side ! Let’s make some
              Fuzzy Discoveries together…
            </p>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <FeatureRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
