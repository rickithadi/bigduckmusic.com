import React from 'react';

import uno from '../../img/carouPics/IMG_0529.jpg';
import dos from '../../img/carouPics/IMG_1324.jpg';
import tres from '../../img/carouPics/IMG_0522.jpg';
import quatro from '../../img/carouPics/IMG_1474.jpg';
import isnk from '../../img/carouPics/IMG_3455.jpg';
import fux from '../../img/carouPics/IMG.jpg';
import heh from '../../img/carouPics/img.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../../components/Layout';
import GigRoll from '../../components/GigRoll';

export default class gigIndexPage extends React.Component {
  render() {
    const pics = [uno, dos, tres, quatro, isnk, fux, heh];
    console.log(pics);
    return (
      <Layout>
        <Carousel>
          {pics.map(i => {
            console.log(i);
            return (
              <Carousel.Item>
                <img src={i} />
              </Carousel.Item>
            );
          })}
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
