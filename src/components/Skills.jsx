import React from 'react';
import {
  back,
  certificate,
  communication,
  deployment,
  front,
  versionControl,
} from '../assets/imgs/stacks/stacks';

const Skills = () => {
  const skillCategories = [
    { title: 'Front-End', icons: front },
    { title: 'Back-End', icons: back },
    { title: 'Version Control', icons: versionControl },
    { title: 'Deployment', icons: deployment },
    { title: 'Communication', icons: communication },
    { title: 'Certificate', icons: certificate },
  ];

  return (
    <section className="section skills" id="skills">
      <div className="section__container">
        <h1 className="section__title">Skills</h1>
        <p className="section__description">
          개발에 사용하는 기술 스택입니다
        </p>

        <div className="skills__grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills__category">
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__icons">
                {category.icons.map((icon, iconIndex) => (
                  <div key={iconIndex} className="skills__icon-wrapper">
                    <img src={icon} alt={`${category.title} skill`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
