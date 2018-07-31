import React from 'react';
import Link from 'gatsby-link';

import './Preview.scss'

const Preview = ({ project }) => (
  <Link to={project.frontmatter.path} className="preview">
    <div className="preview-hover">
      { project.frontmatter.title }
    </div>
  </Link>
)

export default Preview;
