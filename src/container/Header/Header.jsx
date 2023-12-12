import React from 'react';

import { SubHeading } from '/media/janaka/My/Projects/cafe/cafe/src/components';
import { images } from '/media/janaka/My/Projects/cafe/cafe/src/constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' >
    <div>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The Key Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}></p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
