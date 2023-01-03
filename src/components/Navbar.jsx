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
      <Box className={'navbar__menu'}>
        <ul className={'navbar__menu'}>
          <li className={'navbar__menu__item active'}>HOME</li>
          <li className={'navbar__menu__item'}>About</li>
          <li className={'navbar__menu__item'}>MY work</li>
          <li className={'navbar__menu__item'}>Skills</li>
          <li className={'navbar__menu__item'}>Contact Me</li>
        </ul>
      </Box>

      <button className={'navbar__toggle-btn'}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </Box>
  );
};

export default Navbar;
