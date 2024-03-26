import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/header.css';

import image1 from "../assets/bg2.jpg"
import image2 from '../assets/clouds.jpg'
import image3 from '../assets/room4.jpg'
import image4 from '../assets/room1.jpg'
var images = [image1, image2, image3, image4];

var size=4;
function Navbar() {
  var [index, setIndex] = useState(0);
  const [navbar, setnavbar] = useState(false);
  var [menu, setmenu] = useState(false);
  useEffect(() => {
    const changebg = () => {
      // let size = images.length;
      var l=index+1;
      l=l%size
      setIndex(l);
    };
    // Set the interval to change the background every 3 seconds
    const intervalId = setInterval(changebg, 3000);


    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [window.scrollY]);


  const handleright = () => {
    // let size = images.length;
    var l=index+1;
    l=l%size
    setIndex(l);
  }
  const handleleft = () => {
    // let size = images.length;
    var l=index-1;
    l=l%size
    setIndex(l);
  }
  const handlescroll = () => {

    if (window.scrollY > 100) {
      setnavbar(true);
      //console.log("reached out 100");
    }
    else {
      setnavbar(false);
    }
  }
  const handlecrossToFalse = () => {
    setmenu(false);
  }
  const handlecrossToTrue = () => {
    setmenu(true);
  }
  window.addEventListener("scroll", handlescroll);
  const location = useLocation();
  return (
    <>
    <div id={menu ? 'otherarea' : 'noarea'} onClick={handlecrossToFalse}></div>
      <div className="navcontainer" onScroll={handlescroll}>
        <div className="background"  style={{
          backgroundImage: `url(${images[index]})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>

        </div>
        <nav className={navbar ? "scrollnav" : "noscrollnav"}>
          <span className="logo">SUITES</span>
          <span className="links" id={menu ? 'show' : 'noshow'}>
            <div className="cross-sign" onClick={handlecrossToFalse} ></div>

            <Link id='link' to='/' className={location.pathname === '/' ? 'active' : ''}><span>Home</span></Link>
            <Link id='link' to='/about' className={location.pathname === '/about' ? 'active' : ''}><span>About</span></Link>
            <Link id='link' to='/room' className={location.pathname === '/room' ? 'active' : ''}><span>Rooms</span></Link>
            <Link id='link' to='/contact' className={location.pathname === '/contact' ? 'active' : ''}><span>Contact</span></Link>
          </span>
          <span id='menu' onClick={handlecrossToTrue}>
            <span id={navbar ? "scrolling" : ""}></span>
            <span  id={navbar ?"scrolling" : ""}></span>
            <span  id={navbar ?"scrolling" : ""}></span>
          </span>
        </nav>
        <div className="innertext">
          <div className="arrow-button" onClick={handleleft}>
            <div className="arrow-line"></div>
            <div className="arrow-shape"></div>
          </div>
          <div className="text">
            <h1>Welcome To Suits</h1>
            <p>here is your favourite places</p>
          </div>
          <div className="arrow-button2" onClick={handleright}>
            <div className="arrow-line2"></div>
            <div className="arrow-shape2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
