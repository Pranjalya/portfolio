import React from 'react';
import AnimateWhenVisible from './AnimateWhenVisible';
import './Title.css';

const Title = ({ title, description }) => {
  return (
    <AnimateWhenVisible name="fadeUp">
      <div className="caption">
        <h2>{title}</h2>
        <div className="wrapper">
          <div className="text-wrapper">{description}</div>
        </div>
      </div>
    </AnimateWhenVisible>
  );
};

export default Title;