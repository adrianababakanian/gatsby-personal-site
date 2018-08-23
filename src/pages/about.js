import React from 'react'
import me from './../assets/images/me-min-3.jpg'

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

      <h4>
        Some things that make me, me &mdash; I'm proudly half-Croatian &
        half-Armenian, currently am obsessed with
        20th century magical realist literature, listen to
        Oh Wonder religiously, and am for no particular reason
        very proud of my <a href="https://www.pinterest.com/ababakanian/">Pinterest.</a>
      </h4>
      <h4>
        I'm also super into ring theory and the inherently layered
        nature of mapping interfaces &mdash; juxtaposing user-relevant data,
        whatever it may be, onto renderings representing the
        tangible geospatial world fascinates me.
      </h4>


    </div>
  )
}

export default AboutPage
