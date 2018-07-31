import React from 'react'
import me from './../assets/images/me-min.jpg'

import './../common.scss';

const AboutPage = () => {
  return (
    <div>
      <div className="me-wrap">
        <img src={me} className="me"/>
        <div className="overlay"/>
      </div>
      <h3>
        Hi there! ✨ I'm Adriana Babakanian,
        a fourth-year Regents' Scholar at UC Berkeley
        purusing a double major in Computer Science 🌈‍ &
        Applied Mathematics 🦄.
      </h3>
      <h3>
        I'm a designer driven by my recognition of aesthetic
        implications in even the most conceptual of things
        💭, informed by a deep passion for technical logic 💡.
      </h3>


    </div>
  )
}

export default AboutPage
