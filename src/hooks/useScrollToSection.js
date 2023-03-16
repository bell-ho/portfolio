import { useEffect } from 'react';

const useScrollToSection = (selectedNavIndex) => {
  const sectionIds = ['#home', '#about', '#work', '#skills', '#contact'];

  const scrollIntoView = (selector) => {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const navItems = sectionIds.map((id) => document.querySelector(`[data-link="${id}"]`));
    const selectNavItem = (selected) => {
      navItems.forEach((navItem) => navItem.classList.remove('active'));
      // selected.classList.add('active');
    };

    selectNavItem(navItems[selectedNavIndex]);
  }, [selectedNavIndex]);

  return scrollIntoView;
};

export default useScrollToSection;
