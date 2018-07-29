import React from 'react'
import Link from 'gatsby-link'

import Emphasis from './../components/emphasis/Emphasis'

import './../common.scss';

import Terminal from '../components/terminal/Terminal'

const IndexPage = () => (
  <div>
    <h1>Hi, I'm Adriana.</h1>
    <p>
      I'm a
      {<Emphasis content="software engineer" color={"cycle"}></Emphasis>},
      {<Emphasis content="graphic designer" color={"atomic"}></Emphasis>}, &
      {<Emphasis content="web developer" color={"matcha"}></Emphasis>}&nbsp;
      studying Computer Science & Math at the University of California, Berkeley.
    </p>

    <p>
      I believe in the power of visually informed interaction-driven
      engineering & a good cup of Uji matcha.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
