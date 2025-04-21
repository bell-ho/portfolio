import { useEffect } from 'react';

const useNavbarToggle = (scrollIntoView) => {
  useEffect(() => {
    const navbar = document.querySelector('#navbar');
    const navbarMenu = document.querySelector('.navbar__menu');
    const toggle = document.querySelector('#toggle');
    const home = document.querySelector('.home__container');
    const arrowUp = document.querySelector('.arrow-up');
    const homeHeight = home.getBoundingClientRect().height;

    const onNavbarMenuClick = (event) => {
      const target = event.target;
      const link = target.dataset.link;
      if (link == null) {
        return;
      }
      navbarMenu.classList.remove('open');
      toggle.checked = false;
      scrollIntoView(link);
    };

    const onScroll = () => {
      const navbarHeight = navbar.getBoundingClientRect().height;
      if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
      } else {
        navbar.classList.remove('navbar--dark');
      }

      home.style.opacity = 1 - window.scrollY / homeHeight;

      if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
      } else {
        arrowUp.classList.remove('visible');
      }
    };

    navbarMenu.addEventListener('click', onNavbarMenuClick);
    document.addEventListener('scroll', onScroll);

    return () => {
      navbarMenu.removeEventListener('click', onNavbarMenuClick);
      document.removeEventListener('scroll', onScroll);
    };
  }, [scrollIntoView]);
};
export default useNavbarToggle;
