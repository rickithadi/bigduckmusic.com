import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="fnr">
          <section style={{paddingTop: '1%'}}>
            <div
              className="full-width-image-container "
              style={{height: '20%'}}>
              <div
                style={{
                  padding: '10px',
                }}>
                <h1 className="fHeader" style={{color: 'black'}}>
                  Features + Reviews
                </h1>
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
        </div>
      </Layout>
    );
  }
}
