import React from 'react';

import tre from '../../../static/img/carouPics/image3.jpg';
import pipe from '../../../static/img/carouPics/Image2.jpg';
import sik from '../../../static/img/carouPics/Image1.jpg';

import Carousel from 'react-bootstrap/Carousel';
import Layout from '../../components/Layout';
import GigRoll from '../../components/GigRoll';

export default class gigIndexPage extends React.Component {
  state = {isMobile: false};
  componentDidMount = () => {
    let hold = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.setState({isMobile: hold});
    console.log('monb', this.state.isMobile);
  };
  render() {
    const picso = [tre, pipe, sik];
    return (
      <Layout style={{backgroundColor: 'black'}}>
        <div
          className="gigbg"
          style={{
            minHeight: '25vh',
            height: '100%',
          }}>
          <h1
            className="fHeader cen"
            style={{
              color: 'white',
            }}>
            Big Duck music gigs
          </h1>
        </div>
        <section className="section" style={{backgroundColor: 'black'}}>
          <div className="container">
              <GigRoll />
            </div>
        </section>
      </Layout>
    );
  }
}
