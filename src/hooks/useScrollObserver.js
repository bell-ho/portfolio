import React, { useEffect, useState } from 'react';

const useScrollObserver = () => {
  const sectionIds = ['#home', '#about', '#work', '#skills', '#contact'];
  const [selectedNavIndex, setSelectedNavIndex] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.intersectionRatio > 0) {
          const index = sectionIds.indexOf(`#${entry.target.id}`);
          if (entry.boundingClientRect.y < 0) {
            setSelectedNavIndex(index + 1);
          } else {
            setSelectedNavIndex(index - 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = sectionIds.map((id) => document.querySelector(id));
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return selectedNavIndex;
};
export default useScrollObserver;
