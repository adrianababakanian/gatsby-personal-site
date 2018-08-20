import React from 'react'
import Link from 'gatsby-link'

import Emphasis from './../emphasis/Emphasis'

import './Header.scss'
import logo from './../../assets/images/logo.svg';

const Header = ({ siteTitle, links }) => (
  <div className="header">
    <Link to="/" className="logo"> <img src={logo}/> </Link>
    {links && links.map(link => (
      <Link to={`/${link[0].toLowerCase()}`}
            className="header-item"
            activeClassName={`${link[1]}`}>
        <Emphasis content={link[0]} color={link[1]} header={true}>
          {link[0]}
        </Emphasis>
      </Link>
    ))}
  </div>
)

export default Header
