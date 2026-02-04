import React from 'react';
import Projects from './projects/Projects';

const Work = () => {
  return (
    <section className="section work" id="work">
      <div className="section__container">
        <h1 className="section__title">Projects</h1>
        <p className="section__description">
          제가 작업한 프로젝트들입니다
        </p>

        <div className="work__content">
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Work;
