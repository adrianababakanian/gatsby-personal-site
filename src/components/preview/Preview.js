import React from 'react';
import Link from 'gatsby-link';

import './Preview.scss'

const Preview = ({ name }) => (
  <Link className="preview">
    <div className="preview-hover">
      { name }
    </div>
  </Link>
)

export default Preview;
