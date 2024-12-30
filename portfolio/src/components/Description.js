import React from 'react';
import './Description.css';

const Description = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <div
        className="first-paragraph"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default Description;