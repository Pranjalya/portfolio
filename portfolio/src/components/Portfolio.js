import React, { useState } from 'react';
import Title from './Title';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Portfolio.css';
import { Tooltip } from '@mui/material';

const Portfolio = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const slides = [
    { id: 0, text: 'Tensorflow', src: 'tf.jpeg' },
    { id: 1, text: 'ElasticSearch', src: 'Elasticsearch.png' },
    { id: 2, text: 'Vue.js', src: 'vue.png' },
    { id: 3, text: 'Cloudant', src: 'cloudant.png' },
    { id: 4, text: 'MongoDB', src: 'mongodb.png' },
    { id: 5, text: 'Docker', src: 'docker.webp' },
    { id: 6, text: 'MySQL', src: 'mysql.jpeg' },
    { id: 7, text: 'Scikit Learn', src: 'sklearn.webp' },
    { id: 8, text: 'CouchDB', src: 'couchdb-logo1.png' },
    { id: 9, text: 'CircleCI', src: 'circleci.png' },
    { id: 10, text: 'Google Cloud Platform ', src: 'gcp.png' },
    { id: 11, text: 'Golang', src: 'go.png' },
  ];
  const posts = [
    {
      title: 'WebRTC Video Chat',
      id: '1',
      site_url: 'https://pranjalya.github.io/cordova-webrtc',
      media_url:
        'https://drive.google.com/thumbnail?id=18nft8nnx_1iiSrbcxIgNaqOztb83nOKI',
      tags: ['project'],
    },
    {
      title: 'What is Debiasing, and Why is it important?',
      id: '2',
      site_url:
        'https://medium.com/@pranjalyatiwari/what-is-debiasing-and-why-is-it-important-6cad40e8511c',
      media_url:
        'https://drive.google.com/thumbnail?id=1l-tdbX-mRcZODSzSU8nkrKaYIbDO8Tmf',
      tags: ['blog'],
    },
    {
      title: 'Did Google Duplex really pass the Turing Test?',
      id: '3',
      site_url:
        'https://medium.com/@pranjalyatiwari/did-google-duplex-really-pass-the-turing-test-ad62fd8286f5',
      media_url:
        'https://drive.google.com/thumbnail?id=11do6CTVeGt9f9CWAQXleDeMl4RFl8NUo',
      tags: ['blog'],
    },
    {
      title: 'Student Data Centre',
      id: '4',
      site_url: 'https://pranjalya.github.io/student-data-centre',
      media_url:
        'https://drive.google.com/thumbnail?id=137WbC_TeBKH6Gig6h17K7yZs70KUVXGn',
      tags: ['project'],
    },
    {
      title: 'How Does Google Translate Work?',
      id: '5',
      site_url:
        'https://medium.com/@pranjalyatiwari/how-does-google-translate-work-86429c915cc2',
      media_url:
        'https://drive.google.com/thumbnail?id=1HePuTrXNxVA894lNX36UuAjhC-mu507w',
      tags: ['blog'],
    },
    {
      title: 'Millenials',
      id: '6',
      site_url:
        'https://play.google.com/store/apps/details?id=io.kaissa.millennials&hl=en_IN',
      media_url:
        'https://drive.google.com/thumbnail?id=1SpDi_9jTdQyt_jRhWEY1n5G2XwrUduhy',
      tags: ['project'],
    },
    {
      title: 'How to download previous versions of a Kaggle Dataset?',
      id: '7',
      site_url:
        'https://medium.com/@pranjalyatiwari/how-to-download-previous-versions-of-a-kaggle-dataset-9a8d62b78dcc',
      media_url:
        'https://drive.google.com/thumbnail?id=18v_DQkdu5U5SyuUs0bY85UoPURttdXjB',
      tags: ['blog'],
    },
    {
      title:
        'Better Neural Network Weight Initializations with Reinforcement Learning',
      id: '8',
      site_url: 'https://github.com/Pranjalya/LearningInitializations',
      media_url:
        'https://drive.google.com/thumbnail?id=10KjDqaPWeYqDVeHlL9LJ3VoE3mHIMu4c',
      tags: ['project'],
    },
  ];

  const filteredPosts =
    currentFilter === 'all'
      ? posts
      : posts.filter((post) => post.tags.includes(currentFilter));

  return (
    <section id="portfolio" className="my-portfolio position">
      <Title title="Portfolio" description="My Works" />

      <div className="section-content">
        <div className="portfolio-table controls">
          <ul className="breadcrumbs">
            <li
              className={`filter ${currentFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCurrentFilter('all')}
            >
              All works
            </li>
            <li
              className={`filter ${currentFilter === 'blog' ? 'active' : ''}`}
              onClick={() => setCurrentFilter('blog')}
            >
              Blogs
            </li>
            <li
              className={`filter ${
                currentFilter === 'project' ? 'active' : ''
              }`}
              onClick={() => setCurrentFilter('project')}
            >
              Projects
            </li>
          </ul>
        </div>

        <div className="row justify-content-center">
          {filteredPosts.map((post) => (
            <div
              className="col-md-4 col-lg-auto portfolio-item"
              key={post.id}
            >
              <img src={post.media_url} alt="image" />
              <div className="portfolio-link">
                <a href={post.site_url} className="popup_content" target="_blank" rel="noreferrer">
                  See
                </a>
                <Tooltip title={post.title}>
                    <div className="tooltiptext"></div>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />

      <Title title="" description="Tools Known" />
      <div className="section-content tools-carousel-container">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={1000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
          emulateTouch={true}
          className="tools-carousel"
        >
          {slides.map((slide) => (
            <div key={slide.id}>
              <img
                src={`img/icons/${slide.src}`}
                alt={slide.text}
                style={{ width: '150px', height: '150px' }}
              />
              <p className="legend">{slide.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;