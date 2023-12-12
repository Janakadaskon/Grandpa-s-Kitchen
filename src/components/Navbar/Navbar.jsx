import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';



const Navbar = () => {
  const[toggleMenu, setToggleMenu] = React.useState(false);
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.daddy} alt="app__logo" />
      <h1>Grandpa's Kitchen</h1>
    </div>

    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu"></a>Menu</li>
      <li className='p__opensans'><a href="#awards"></a>Awards</li>
      <li className='p__opensans'><a href="#contact"></a>Contact</li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Log In / Register</a>
      <div />
      <a href="/" className='p__opensans'>Book a Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu 
        color='#fff' 
        fontSize={27} 
        onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li ><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li ><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li ><a href="#menu" onClick={() => setToggleMenu(false)}></a>Menu</li>
              <li ><a href="#awards" onClick={() => setToggleMenu(false)}></a>Awards</li>
              <li ><a href="#contact" onClick={() => setToggleMenu(false)}></a>Contact</li>
            </ul>
          </div>
        )}
    </div>  
  </nav>
  );
};

export default Navbar;
