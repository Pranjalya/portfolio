import React from 'react';
import './Social.css';

const Social = () => {
  const socialMedias = [
    {
      icon: 'icon-linkedin',
      link: 'https://www.linkedin.com/in/pranjalya-tiwari-456a7a179/',
    },
    {
      icon: 'icon-github-circled',
      link: 'https://www.github.com/Pranjalya',
    },
    { icon: 'icon-facebook', link: 'https://www.facebook.com/pranjalya.tiwari' },
    { icon: 'icon-twitter', link: 'https://twitter.com/PranjalyaQuasar' },
    { icon: 'icon-maxcdn', link: 'https://www.medium.com/@pranjalyatiwari' },
    {
      icon: 'icon-instagram',
      link: 'https://www.instagram.com/pranjalya_kvothe/',
    },
    {
      icon: 'icon-quora',
      link: 'https://www.quora.com/profile/Pranjalya-Tiwari',
    },
    {
      icon: 'icon-stackoverflow',
      link: 'https://stackoverflow.com/users/10142251/pranjalya/',
    },
  ];

  return (
    <div className="social-wrap">
      <ul>
        {socialMedias.map((social, index) => (
          <li key={index}>
            <a href={social.link} target="_blank" rel="noopener noreferrer" aria-label="icons">
              <i className={social.icon}> </i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;