import React from 'react';
import Link from 'gatsby-link';

import './Preview.scss'

const Preview = ({ project, color, children }) => (
  <Link to={project.frontmatter.path} className={`preview ${color}`}>
    <div className="preview-image"> { children } </div>
    <div className="preview-hover">
      { project.frontmatter.title }
    </div>
  </Link>
)

export default Preview;
