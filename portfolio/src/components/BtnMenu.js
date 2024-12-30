import React from 'react';
import './BtnMenu.css';

const BtnMenu = ({ active, onClick }) => {
  return (
    <button className="btn-menu" aria-label="button" onClick={onClick}>
      <span className={`sandwich ${active ? 'active' : ''}`}>
        <span className="sw-topper"></span>
        <span className="sw-bottom"></span>
        <span className="sw-footer"></span>
      </span>
    </button>
  );
};

export default BtnMenu;