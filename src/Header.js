import React from 'react'
import "./Header.css"
import Logo from "./logo.svg"

function Header() {
  return (
    <div className='header__wrapper'>
        <div className='header__logo'>
            <img src={Logo} alt="Logo" width={25}/>
        </div>
        <div className='header__search'>

        </div>
        <div className='header__menuItems'>
            <a href='#/'>Stocks Gratuit</a>
            <a href='#/'>Portfolio</a>
            <a href='#/'>Cash</a>
            <a href='#/'>Messages</a>
            <a href='#/'>Compte</a>
        </div>
    </div>
  )
}

export default Header;