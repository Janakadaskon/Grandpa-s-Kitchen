import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex-center'>
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className='app__aboutus-content flex_center '>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>At Grandpa's Kitchen, we believe in the magic of family 
          and the warmth of shared meals. Our culinary journey began 
          with Grandpa himself, a seasoned chef whose passion for 
          cooking ignited a legacy of culinary excellence. Inspired 
          by his timeless recipes and a commitment to quality, 
          we strive to transport you to a place where every bite 
          tells a story.
        </p>
        <button type='button' className='custom__button'>know more</button>
      </div>

      <div className='app__aboutus-content_knife flex_center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>....................</p>
        <button type='button' className='custom__button'>Know More</button>

      </div>
    </div>
  </div>
);

export default AboutUs;
