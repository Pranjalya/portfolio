import React from 'react';
import Title from './Title';
import Photo from './Photo';
import PersonalInfo from './PersonalInfo';
import Radar from './Radar';
import AnimateWhenVisible from './AnimateWhenVisible';
import './AboutMe.css'; // Using CSS Modules

const AboutMe = ({ user }) => {
  return (
    <section id="about">
      <Title title="About Me" description="Let's get to know each other" />
      <div className="section-content">
        <div className="container-fluid">
          <div className="row">
            <AnimateWhenVisible name="fadeLeft" className="col-12 col-md">
              <Radar />
            </AnimateWhenVisible>
            <Photo className="col-12 col-md text-center" />
            <AnimateWhenVisible name="fadeRight" className="col-12 col-md">
              <PersonalInfo userName={user.name} />
            </AnimateWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;