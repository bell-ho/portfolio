import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Box, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Box className={'navbar'} id={'navbar'}>
      <Box className={'navbar__logo'}>
        <StarIcon />
        <a href={'#'}>BELL-HO</a>
      </Box>

      <ul className={'navbar__menu'}>
        <li className={'navbar__menu__item active'} data-link={'#home'}>
          HOME
        </li>
        <li className={'navbar__menu__item'} data-link={'#about'}>
          About
        </li>
        <li className={'navbar__menu__item'} data-link={'#work'}>
          MY work
        </li>
        <li className={'navbar__menu__item'} data-link={'#skills'}>
          Skills
        </li>
        <li className={'navbar__menu__item'} data-link={'#contact'}>
          Contact Me
        </li>
      </ul>

      <button className={'navbar__toggle-btn'}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </Box>
  );
};

export default Navbar;
