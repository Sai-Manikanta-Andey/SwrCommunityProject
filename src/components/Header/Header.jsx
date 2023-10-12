import React, { useState } from 'react'
import './Header.css'
import {FiMenu} from 'react-icons/fi'
import OutsideClickHandler from "react-outside-click-handler";



function Header() {
  const [menuState,setMenuState]= useState(false)
  const toggleMenu = (menuState)=>{
    if(document.documentElement.clientWidth < 768){
      return { right: !menuState && -200 }
    }
  }

  const handleMenuClick= ()=>{
    setMenuState((prev)=>!prev)
  }


  return (
    <div className="nav-container maxWidth">
      <header className="paddings1">
        <div className="nav-logo">
          <img src="swrlogo.png" alt="logo" width={90} className='logo' />
        </div>
        <nav>
          <OutsideClickHandler onOutsideClick={()=>setMenuState(false)}>
            <ul className="nav-items" style={toggleMenu(menuState)}>
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="#social">Social</a>
              </li>
              <li className="nav-item">
                <a href="#about">About</a>
              </li>
            </ul>
            <div className="menu-icon">
              <FiMenu onClick={handleMenuClick} />
              <div></div>
            </div>
          </OutsideClickHandler>
        </nav>
      </header>
    </div>
  );
}

export default Header