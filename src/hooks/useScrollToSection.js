import { useEffect } from 'react';

const useScrollToSection = (selectedNavIndex) => {
  const sectionIds = ['#home', '#about', '#work', '#skills', '#contact'];

  const scrollIntoView = (selector) => {
    const scrollTo = document.querySelector(selector);
    const navHeight = document.querySelector('.navbar').offsetHeight;

    const targetPosition = scrollTo.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const navItems = sectionIds.map((id) => document.querySelector(`[data-link="${id}"]`));
    const selectNavItem = (selected) => {
      navItems.forEach((navItem) => navItem.classList.remove('active'));
    };

    selectNavItem(navItems[selectedNavIndex]);
  }, [selectedNavIndex, sectionIds]);

  return scrollIntoView;
};

export default useScrollToSection;
