import React from 'react';
import {Helmet} from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import {withPrefix} from 'gatsby';

const TemplateWrapper = ({children}) => {
  const {title, description} = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:image" href={`${withPrefix('/')}img/zoot.png`} />
        <meta property="og:image" content={`${withPrefix('/')}img/zoot.png`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/zoot.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/zoot.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/zoot.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/zoot.png`}
          color="#ff4400"
        />
      </Helmet>
      <Navbar />
      <div
        style={{
          minHeight: '100%',
        }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
