import {React,useState} from 'react';
import gericht from '../../assets/gericht.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu,SetToggleMenu]=useState(false)
  
  return (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img  src={gericht} alt='app-logo' />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#pages'>Pages</a></li>
      <li className='p__opensans'><a href='#contact us'>Contact Us</a></li>
      <li className='p__opensans'><a href='#blog'>Blog</a></li>
      <li className='p__opensans'><a href='#landing'>Landing</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Log in / registration</a>
      <div />
      <a href='#/' className='p__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallscreen '>
      <GiHamburgerMenu color='white' fontSize={27} onClick={() => SetToggleMenu(true)} />

      { toggleMenu && (
      <div className='app__navbar-smallscreen-overlay flex__center slide-buttom'>
        <MdOutlineRestaurantMenu color='white' fontSize={27}  className="overlay__close" onClick={() => SetToggleMenu(false)} />
        <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>   
          <li className='p__opensans'><a href='#pages'>Pages</a></li>
          <li className='p__opensans'><a href='#contact us'>Contact Us</a></li>
          <li className='p__opensans'><a href='#blog'>Blog</a></li>
          <li className='p__opensans'><a href='#landing'>Landing</a></li>
        </ul>
      </div>
      )}
    </div>

  </nav>
)};

export default Navbar;
