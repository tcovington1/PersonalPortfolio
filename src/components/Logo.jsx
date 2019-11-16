import React from 'react';

import { ReactComponent as Logo } from '../assets/images/logo.png';
import '../assets/sass/added-fonts/AddedFonts.scss';

const LogoIcon = () => (
  <div className='logo-icon' >
    <Logo className='logo' />
  </div>
);

export default LogoIcon;