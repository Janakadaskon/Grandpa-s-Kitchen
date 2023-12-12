import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className='app__aboutus-content flex__center '>
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
        <p className='p__opensans'>Embark on a journey through time at Grandpa's Kitchen, where the 
        rich tapestry of history intertwines with culinary mastery. Our story begins with Grandpa 
        himself, a culinary virtuoso whose passion for cooking sparked the inception of our iconic 
        restaurant. With roots deeply embedded in tradition, Grandpa's Kitchen is a living testament 
        to the timeless recipes and flavors that have stood the test of generations.</p>
        <button type='button' className='custom__button'>know more</button>

      </div>
    </div>
  </div>
);

export default AboutUs;
