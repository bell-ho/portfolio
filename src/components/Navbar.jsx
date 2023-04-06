import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Box, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Box className={'navbar'} id={'navbar'}>
      <input type="checkbox" id="toggle" />

      <button className={'navbar__toggle-btn'}>
        <label htmlFor={'toggle'}>
          <FontAwesomeIcon icon={faBars} />
        </label>
      </button>

      <Box className={'navbar__logo'}>
        <StarIcon style={{ marginRight: '10px' }} />
        <a href={'#'}>BELL-HO</a>
      </Box>

      <aside>
        <ul className={'navbar__menu'}>
          <li className={'navbar__menu__item active'} data-link={'#home'}>
            HOME
          </li>
          <li className={'navbar__menu__item'} data-link={'#about'}>
            ABOUT
          </li>
          <li className={'navbar__menu__item'} data-link={'#skills'}>
            SKILLS
          </li>
          <li className={'navbar__menu__item'} data-link={'#work'}>
            PROJECTS
          </li>
          <li className={'navbar__menu__item'} data-link={'#career'}>
            CAREER
          </li>
          <li className={'navbar__menu__item'} data-link={'#contact'}>
            CONTACT
          </li>
        </ul>
      </aside>
    </Box>
  );
};

export default Navbar;
