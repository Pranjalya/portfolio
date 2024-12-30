import React from 'react';
import AppMenu from './AppMenu';
import AnimateWhenVisible from './AnimateWhenVisible';
import './FrontPage.css';

const FrontPage = ({ user }) => {
  return (
    <header className="header parallax position">
      <div className="container-page">
        <AppMenu />
      </div>

      <div className="name-block">
        <div className="title-text">
          <AnimateWhenVisible name="fadeDown" duration={2}>
            <h1>{user.name}</h1>
          </AnimateWhenVisible>
          <AnimateWhenVisible name="fadeUp" duration={2}>
            <p>{user.description}</p>
          </AnimateWhenVisible>
        </div>
      </div>
    </header>
  );
};

export default FrontPage;