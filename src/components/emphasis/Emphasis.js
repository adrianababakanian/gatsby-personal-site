import React from 'react';
import Link from 'gatsby-link';

import './Emphasis.scss';

const Emphasis = ({ content, color, header }) => {
  return (
    <span>
      &nbsp;
      <span className="em">
        <span className={`highlight ${color} ${header && header ? "header" : ""}`}/>
        <span className="content">{ content }</span>
      </span>
    </span>
  )
}

export default Emphasis;
