import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNine } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import{TbShoppingCartHeart} from 'react-icons/tb';
import imgSrc from './../../Assets/trip_advisor_logo.png'
const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const shownav = () => {
    setActive('navBar activeNavBar');
  };

  const removenav = () => {
    setActive('navBar');
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
    // refresh the page
    window.location.href = '/Login';
};



  useEffect(() => {
    const storedToken = localStorage.getItem('email');
    if (storedToken) {
      setToken(storedToken);
      
    }
  }, [navigate]);

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/Home" className="logo flex">
           
            <img className='imgLogo' src={imgSrc} alt="Login" />
            
          </Link>
        </div>
        <div className={active}>
          <ul className="navlists flex">
            <li className="navItem">
              <Link to="/Home" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/About" className="navLink">
                About
              </Link>
            </li>
            {token ?
              <li className="navItem">
                <Link to="/" className="navLink" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
              :
              <>
                <li className="navItem">

                  <Link to="/" className="navLink" >
                    Sign In
                  </Link>

                </li>
                <li className="navItem">
                  <Link to="/SignUp" className="navLink">
                    SignUp
                  </Link>
                </li>
              </>
            }
            <li className="navItem">
              <Link to="/WhereToStay" className="navLink">
                Where to stay
              </Link>
            </li>
            <li className="navItem">
              <Link to="/Contacts" className="navLink">
                Contacts
              </Link>
            </li>
            <li className="navItem">
              <Link to="/wishlist" className="navLink">
              <TbShoppingCartHeart className="WishlistIcon"/>
              </Link>
            </li>
          </ul>
          
          <div onClick={removenav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={shownav} className="toggleNavbar">
          <PiDotsNine className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
