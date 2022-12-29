import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Box, Link } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <Box>
        <StarIcon />
        <Link href={'#'}>BELL-HO</Link>
      </Box>
      <Box className={'navbar__menu'}>
        <ul className={'navbar__menu'}>
          <li className={'navbar__menu__item'}>HOME</li>
          <li className={'navbar__menu__item'}>MY work</li>
          <li className={'navbar__menu__item'}>Skills</li>
          <li className={'navbar__menu__item'}>Contact</li>
        </ul>
      </Box>
    </>
  );
};

export default Navbar;
