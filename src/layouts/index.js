import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/Header'
import './index.scss'

const links = [
  ["About", "sakura"],
  ["Prototyping", "atomic"],
  ["Code", "matcha"],
  ["Design", "cycle"]
]

const Layout = ({ children, data }) => (

  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      <Header links={links} />
      <div className="container">
        {children()}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
