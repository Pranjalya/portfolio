import React from 'react';
import './ModalView.css';

const ModalView = ({ children, onClose }) => {
  return (
    <div className="modal-mask" onClick={onClose}>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalView;