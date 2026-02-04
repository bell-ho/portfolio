import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import velog from '../assets/imgs/velog.jpg';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/bell-ho',
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: 'Velog',
      url: 'https://velog.io/@bell-ho',
      image: velog,
    },
    {
      name: 'Email',
      url: 'mailto:jj0101065@gmail.com',
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
  ];

  return (
    <footer className="section contact" id="contact">
      <div className="section__container">
        <h1 className="section__title">Contact</h1>
        <p className="section__description">
          함께 일하고 싶으시다면 연락주세요
        </p>

        <div className="contact__social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label={link.name}
            >
              {link.image ? (
                <img src={link.image} alt={link.name} />
              ) : (
                link.icon
              )}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <div className="contact__footer">
          <p>&copy; {new Date().getFullYear()} Lee Jong Ho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
