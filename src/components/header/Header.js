import React from 'react'
import Link from 'gatsby-link'

import Emphasis from './../emphasis/Emphasis'

import './Header.scss'
import logo from './../../assets/images/logo.svg';

const Header = ({ siteTitle, links, style }) => (
  <div className="header" style={ style }>
    <Link to="/" className="logo"> <img src={logo}/> </Link>
    {links && links.map(link => (
      <Link to={`/${link[0].toLowerCase()}`}
            className="header-item"
            activeClassName={`${link[1]}`}>
        <div className={`header-item-content ${link[1]}`}>
          {link[0]}
        </div>
      </Link>
    ))}
    <div className='hamburger'>&#9776;</div>
  </div>
)

export default Header
