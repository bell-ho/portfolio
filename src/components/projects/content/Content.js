import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Content = ({ content: { content, mainFn, front, back, deploy, git, demo } }) => {
  const techSections = [
    { label: '주요 기능', items: mainFn, color: '#ec4899' },
    { label: 'Front-End', items: front, color: '#6366f1' },
    { label: 'Back-End', items: back, color: '#a855f7' },
    { label: 'Deployment', items: deploy, color: '#22c55e' },
  ];

  return (
    <div className="project__content">
      <p className="project__description">
        {content.split('\n').map((line, index) => (
          <Fragment key={index}>
            {line}
            {index !== content.split('\n').length - 1 && <br />}
          </Fragment>
        ))}
      </p>

      <div className="project__tech-sections">
        {techSections.map((section, sectionIndex) => (
          section.items && section.items.length > 0 && (
            <div key={sectionIndex} className="project__tech-section">
              <h4 className="project__tech-label" style={{ borderColor: section.color }}>
                {section.label}
              </h4>
              <div className="project__tech-tags">
                {section.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="project__tech-tag"
                    style={{ borderColor: section.color, color: section.color }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      <div className="project__links">
        {demo && (
          <a
            href={demo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project__demo-link"
          >
            <span>DEMO 보기</span>
          </a>
        )}
        {git && (
          <a
            href={git.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project__github-link"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub에서 보기</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Content;
