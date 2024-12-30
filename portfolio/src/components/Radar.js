import React, { useState, useEffect, useRef } from 'react';
import './Radar.css';

const Radar = () => {
  const [skillItem, setSkillItem] = useState(null);
  const skillDetail = [
    'Team Management, Project Management, Team Coordination',
    'Natural Level Processing, Computer Vision, Time Series Forecasting',
    'SEO, Social Media, SEM, Portfolio Development',
    'Workflow, Backend, Frontend, Deployment',
    'Data Cleaning, Preprocessing, Classification, Regression',
    'Collection, Treatment, Analysis',
    'Wireframe, User interface, Engagement, Survey, A/B Testing',
    'CI/CD, Agile, SCRUM, Testing',
  ];

  const setSkill = (index) => {
    setSkillItem(index);
  };

  const currentSize = (index) => {
    return skillItem === index ? 2.5 : 1.1;
  };

  return (
    <div className="radar-container">
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <span
                id="skill-0"
                className="label pin-management"
                onMouseOver={() => setSkill(0)}
                onMouseLeave={() => setSkill(null)}
              >
                Management
              </span>
            </td>
            <td colSpan="2">
              <span
                id="skill-1"
                className="label pin-dl"
                onMouseOver={() => setSkill(1)}
                onMouseLeave={() => setSkill(null)}
              >
                Deep Learning
              </span>
            </td>
            <td colSpan="2">
              <span
                id="skill-2"
                className="label pin-digital"
                onMouseOver={() => setSkill(2)}
                onMouseLeave={() => setSkill(null)}
              >
                Digital Marketing
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <span
                id="skill-3"
                className="label pin-webdev"
                onMouseOver={() => setSkill(3)}
                onMouseLeave={() => setSkill(null)}
              >
                Web Development
              </span>
            </td>
            <td colSpan="2">
              <span
                id="skill-4"
                className="label pin-ml"
                onMouseOver={() => setSkill(4)}
                onMouseLeave={() => setSkill(null)}
              >
                Machine Learning
              </span>
            </td>
            <td colSpan="2">
              <span
                id="skill-5"
                className="label pin-data"
                onMouseOver={() => setSkill(5)}
                onMouseLeave={() => setSkill(null)}
              >
                Data Engineering
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <span
                id="skill-6"
                className="label pin-ux"
                onMouseOver={() => setSkill(6)}
                onMouseLeave={() => setSkill(null)}
              >
                UX Design
              </span>
            </td>
            <td></td>
            <td colSpan="3">
              <span
                id="skill-7"
                className="label pin-dev"
                onMouseOver={() => setSkill(7)}
                onMouseLeave={() => setSkill(null)}
              >
                DevOps
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="radar-chart">
        <svg
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 136.8 136.8"
          className="radar-svg"
        >
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="3.125"
            y1="66.952"
            x2="130.694"
            y2="66.952"
          >
            <stop offset="0" stopColor="#00aad5" />
            <stop offset=".041" stopColor="#00a5bf" />
            <stop offset=".099" stopColor="#0ca0a5" />
            <stop offset=".159" stopColor="#169c91" />
            <stop offset=".221" stopColor="#1a9983" />
            <stop offset=".286" stopColor="#1d977b" />
            <stop offset=".361" stopColor="#1d9678" />
            <stop offset="1" stopColor="#00aad5" />
          </linearGradient>
          <path
            fill="url(#SVGID_1_)"
            d="M40.5 130.7L3.2 93.4l-.1-52.8L40.5 3.2h52.8l37.4 37.3v52.8l-37.4 37.4z"
          />
                    <path
            className="st1"
            d="M93.3 3.3l37.3 37.3v52.7l-37.3 37.3H40.5L3.3 93.3V40.6L40.5 3.3h52.8m.1-.3h-53l-.1.1L3.1 40.4l-.1.1v52.9l.1.1 37.3 37.3.1.1h52.9l.1-.1 37.3-37.3.1-.1V40.5l-.1-.1L93.4 3z"
          />
          <path
            fill="#404951"
            d="M10 89.6L6.7 41.9 43.5 9.2l43.9 8.3 20.9 32.9-.9 33.1-20 32.9-44.1 7z"
          />
          <path
            className="st1"
            d="M43.6 9.3l43.7 8.3 20.8 32.8-.8 33.1-20 32.9-44 6.9-33.1-33.7-3.3-47.7L43.6 9.3m-.1-.3L6.6 41.8l3.3 47.8 33.3 33.8 44.2-6.9 20.1-33 .8-33.2-20.9-33L43.5 9z"
          />
          <circle
            r={currentSize(0)}
            className="st1 radar-point"
            cx="43.7"
            cy="9.1"
            onMouseOver={() => setSkill(0)}
            onMouseLeave={() => setSkill(null)}
          />
          <circle
            r={currentSize(1)}
            className="st1 radar-point"
            cx="6.9"
            cy="41.6"
            onMouseOver={() => setSkill(1)}
            onMouseLeave={() => setSkill(null)}
          />
          <circle
            r={currentSize(2)}
            className="st1 radar-point"
            cx="9.9"
            cy="89.6"
            onMouseOver={() => setSkill(2)}
            onMouseLeave={() => setSkill(null)}
          />
          <circle
            r={currentSize(3)}
            className="st1 radar-point"
            cx="43.4"
            cy="123.4"
            onMouseOver={() => setSkill(3)}
            onMouseLeave={() => setSkill(null)}
          />
          <circle
            r={currentSize(4)}
            className="st1 radar-point"
            cx="87.5"
            cy="116.3"
            onMouseOver={() => setSkill(4)}
            onMouseLeave={() => setSkill(null)}
          />
          <circle
            r={currentSize(5)}
            className="st1 radar-point"
            cx="107.5"
            cy="83.5"
            onMouseOver={() => setSkill(5)}
            onMouseLeave={() => setSkill(null)}
          />
          <circle
            r={currentSize(6)}
            className="st1 radar-point"
            cx="108.3"
            cy="49.5"
            onMouseOver={() => setSkill(6)}
            onMouseLeave={() => setSkill(null)}
          />
          <circle
            r={currentSize(7)}
            className="st1 radar-point"
            cx="87.5"
            cy="17.1"
            onMouseOver={() => setSkill(7)}
            onMouseLeave={() => setSkill(null)}
          />
          <g opacity=".2">
            <path
              className="st4"
              d="M87.5 17.3H46.4L17.3 46.4v41.1l29.1 29.1h41.1l29-29.1V46.4z"
            />
            <path
              className="st4"
              d="M81.8 31.4H52.5L31.7 52.2v29.3l20.8 20.8h29.3l20.8-20.8V52.2z"
            />
            <path
              className="st4"
              d="M76 45.6H58.3L45.9 58v17.7l12.4 12.4H76l12.4-12.4V58zM93.3 3.2L40.5 130.5m52.8 0L40.5 3.2m-37.3 90l127.5-52.7m-127.5 0l127.5 52.7"
            />
            <circle cx="66.9" cy="66.7" r="1.1" fill="#f3f7f9" />
            <path
              className="st4"
              d="M70.1 59.8h-5.9l-4.1 4.1v5.9l4.1 4.1h5.9l4.1-4.1v-5.9z"
            />
          </g>
        </svg>
      </div>
      <div className="skill-details-container">
        {skillItem !== null && (
          <span className="skill-details">{skillDetail[skillItem]}</span>
        )}
      </div>
    </div>
  );
};

export default Radar;