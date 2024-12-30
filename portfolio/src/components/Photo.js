import React, { useState } from 'react';
import ModalView from './ModalView';
import AnimateWhenVisible from './AnimateWhenVisible';
import './Photo.css';

const Photo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <AnimateWhenVisible name="bounce">
        <h3>Photo</h3>
        <div className="person">
          <a href="#!" onClick={() => setIsModalVisible(true)} className="me-photo">
            <img src="img/personal.jpeg" alt="Personal" />
          </a>
        </div>
      </AnimateWhenVisible>

      {isModalVisible && (
        <ModalView onClose={() => setIsModalVisible(false)}>
          <img src="img/personal.jpeg" alt="Personal" />
        </ModalView>
      )}
    </div>
  );
};

export default Photo;