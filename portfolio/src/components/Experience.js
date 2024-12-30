import React from 'react';
import Title from './Title';
import Timeline from './Timeline';
import AnimateWhenVisible from './AnimateWhenVisible';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="my-cv position">
      <Title title="Experience" description="My Knowledge and Achievements" />

      <AnimateWhenVisible name="fadeUp" duration={1.5} className="section-content">
        <div className="container-fluid">
          <div className="row">
            <Timeline />
          </div>
        </div>
      </AnimateWhenVisible>
    </section>
  );
};

export default Experience;