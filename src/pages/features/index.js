import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="fnr" style={{minHeight: '100%'}}>
          <div
            style={{
              padding: '10vh',
            }}>
            <h1 className="fHeader" style={{color: 'black'}}>
              Features + Reviews
            </h1>
          </div>

          <section className="section">
            <div className="container" style={{minHeight:'60vh'}}>
              <BlogRoll />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
