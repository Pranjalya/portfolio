import React from 'react';
import Social from './Social';
import './PersonalInfo.css';

const PersonalInfo = ({ userName }) => {
  return (
    <div>
      <h3>Personal Information</h3>
      <h3 className="personal-header">{userName}</h3>
      <div className="formatting">
        <div className="info">
          <strong>E-mail:</strong>
        </div>
        <div className="email innerformat">
          pranjalyatiwari10@gmail.com, pranjalya.tiwari@bitdurg.ac.in,
          pranjalya.tiwari@deepsync.co
        </div>
      </div>
      <br />
      <div className="formatting">
        <div className="info">
          <strong>Languages:</strong>
        </div>
        <div className="innerformat">
          English, Hindi, Sanskrit, German (Novice)
        </div>
      </div>
      <br />
      <div className="formatting">
        <div className="info">
          <strong>Tools:</strong>
        </div>
        <div className="innerformat">
          PyTorch, Tensorflow, Vue.js, ElasticSearch, Cloudant, MongoDB, MySQL,
          CouchDB, Docker, Scikit-Learn, Airflow, AWS, GCP
        </div>
      </div>
      <br />
      <div className="formatting">
        <div className="info">
          <strong>Technologies:</strong>
        </div>
        <div className="innerformat">
          Data Science, DevOps, Deep Learning, NoSQl, SQL, Full Stack
          Development, Linux, Scripting
        </div>
      </div>
      <br />
      <div className="formatting">
        <div className="info">
          <strong>Programming Languages:</strong>
        </div>
        <div className="innerformat">
          Python, Go, Bash, C++, JavaScript, Solidity
        </div>
      </div>
      <br />
      <div className="formatting">
        <div className="info">
          <strong>Areas of Interest:</strong>
        </div>
        <div className="innerformat">
          Chess, Astronomy, Cricket, Tabla, Astrophysics, Cinematoraphy,
          Cosmology, Poetry, Open Source
        </div>
      </div>
      <br />
      <div className="info">
        <strong>Country:</strong> India 🇮🇳
      </div>
      <br />
      <Social />
      <br />
      <a
        className="bmc-button"
        target="_blank"
        rel="noreferrer"
        href="https://www.buymeacoffee.com/pranjalyatiwari"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
          alt="Buy me a coffee"
        />
        <span style={{ marginLeft: 5, fontSize: 28 }}>Buy me a coffee</span>
      </a>
    </div>
  );
};

export default PersonalInfo;