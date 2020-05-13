import React from 'react';

//import * as pics from '../../img/carouPics';
import logo from '../../img/social/facebook.svg';
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../../components/Layout';
import GigRoll from '../../components/GigRoll';

export default class gigIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="full-width-image-container ">
          <div
            className="text-center"
            style={{textAlign: 'center'}}
            style={{
              backgroundColor: '#a3b6de',
              padding: '20px',
              boxShadow: '0.5rem 0 0 #a3b6de, -0.5rem 0 0 #a3b6de',
              borderRadius: '10px',
            }}>
            <h1
              className=" head"
              style={{
                padding: '1rem',
              }}>
              Big Duck Gigs
            </h1>
            <p className="usb">Our Main Events! And all our previous ones…</p>
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
