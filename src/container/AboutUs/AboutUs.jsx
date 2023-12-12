import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex-center'>
      <img src={images.G} alt="G_overlay" />
    </div>
  </div>
);

export default AboutUs;