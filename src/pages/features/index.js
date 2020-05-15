import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section style={{paddingTop: '3%'}}>
          <div className="full-width-image-container " style={{height: '20%'}}>
            <div
              className="text-center"
              style={{textAlign: 'center'}}
              style={{
                backgroundColor: '#a3b6de',
                padding: '20px',
                boxShadow: '0.5rem 0 0 #a3b6de, -0.5rem 0 0 #a3b6de',
                borderRadius: '10px',
              }}>
              <h1 className="head">Big Duck Features</h1>
              <p
                className="sub"
                style={{
                  textAlign: 'center !important',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Features, Reviews and Everything else Music!
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
