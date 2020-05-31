import React from 'react';

import tre from '../../../static/img/carouPics/image3.jpg';
import pipe from '../../../static/img/carouPics/Image2.jpg';
import sik from '../../../static/img/carouPics/Image1.jpg';

import Carousel from 'react-bootstrap/Carousel';
import Layout from '../../components/Layout';
import GigRoll from '../../components/GigRoll';

export default class gigIndexPage extends React.Component {
  render() {
    const picso = [tre, pipe, sik];
    return (
      <Layout>
        <div
          className="text-center cen"
          style={{textAlign: 'center'}}
          style={{
            backgroundColor: '#a3b6de',
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
        <Carousel indicators={false} controls={false}>
          {picso.map(i => {
            console.log(i);
            return (
              <Carousel.Item>
                <figure className="is-2by1 cen">
                  <img src={i} style={{height: '50vh'}} />
                </figure>
              </Carousel.Item>
            );
          })}
        </Carousel>
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
