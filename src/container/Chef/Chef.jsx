import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote_image" />
          <p className='p__opensans'>Welcome to Grandpa's Kitchen, where every dish is a 
          culinary masterpiece inspired by the heart and soul of our kitchen. As the chef behind 
          these delectable creations, I am honored to share my passion for food and family traditions 
          with each and every guest.

          In our kitchen, we believe that a meal is not just a combination of ingredients; it's a 
          journey through flavors, a dance of textures, and a celebration of culinary artistry. Each 
          recipe has a story, and every dish is a testament to the time-honored techniques passed down 
          through generations.

          Our commitment to excellence goes beyond the plate. We meticulously source the finest, 
          locally-sourced ingredients to ensure that every bite is an experience of freshness and 
          authenticity. From the sizzle of the pan to the final presentation, every step is a labor 
          of love.
          </p>
        </div>
        <p className='p__opensans'>We are here to serve anything that you want</p>
      </div>

      <div className='app__chet-sign'>
        <p>John Wick</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
