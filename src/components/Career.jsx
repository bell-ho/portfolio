import React, { useEffect, useState } from 'react';
import careerMd from '../assets/md/career.md';
import MDEditor from '@uiw/react-md-editor';

const Career = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(careerMd)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <section className="section career" id="career">
      <div className="section__container">
        <h1 className="section__title">Career</h1>
        <p className="section__description">
          저의 경력과 경험입니다
        </p>

        <div className="career__content" data-color-mode="dark">
          <MDEditor.Markdown
            source={markdownContent}
            style={{
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Career;
