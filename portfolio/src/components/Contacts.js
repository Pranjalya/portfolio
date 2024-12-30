import React, { useState } from 'react';
import Title from './Title';
import useValidity from '../hooks/useValidity';
import './Contacts.css';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsValidName(event.target.checkValidity());
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(event.target.checkValidity());
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setIsValidMessage(event.target.checkValidity());
  };

  const formSubmited = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 100);
  };

  return (
    <section id="contact" className="position">
      <Title title="Contact" description="Leave your message" />

      <div className="section-content">
        <div className="row">
          <div className="col-12 col-md">
            <div className="contact-box">
              <h3>Email ID:</h3>
              <p>pranjalyatiwari10@gmail.com</p>
            </div>
            <div className="contact-box">
              <h3>Address:</h3>
              <p>Bilaspur, CG, India</p>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <form onSubmit={formSubmited} action="https://mailthis.to/pranjalyawarrior@gmail.com" method="POST">
              <label className="form-group">
                <div className="title-input">
                  <div>
                    <span className="star-required">*</span>Full Name:
                  </div>
                  <div
                    className={`validation ${
                      !isValidName ? 'fadeRight-enter-active' : ''
                    }`}
                  >
                    Name is required!
                  </div>
                </div>
                <input
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </label>

              <label className="form-group">
                <div className="title-input">
                  <div>
                    <span className="star-required">*</span>E-mail:
                  </div>
                  <div
                    className={`validation ${
                      !isValidEmail ? 'fadeRight-enter-active' : ''
                    }`}
                  >
                    E-mail is required!
                  </div>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </label>

              <label className="form-group">
                <div className="title-input">
                  <div>
                    <span className="star-required">*</span>Message:
                  </div>
                  <div
                    className={`validation ${
                      !isValidMessage ? 'fadeRight-enter-active' : ''
                    }`}
                  >
                    Enter something, please...
                  </div>
                </div>
                <textarea
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
              </label>

              <button type="submit" className="btn-sent">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;