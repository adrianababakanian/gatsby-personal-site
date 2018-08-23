import React from "react"
import Img from 'gatsby-image'
import Preview from './../components/preview/Preview'

const DesignPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
 }) => {
  return (
    <div>
      <h1>Design</h1>
      <p>
        Product, user interface, visual, branding, & beyond.
      </p>

      {edges.map(edge =>
        <div>
          <Preview key={edge.node.id} project={edge.node} color="cycle">
            <Img imgStyle={{height: 276}} sizes={edge.node.frontmatter.featuredImage.childImageSharp.sizes} />
          </Preview>
        </div>
      )}

    </div>
  )
}

export default DesignPage

export const pageQuery = graphql`
  query DesignQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
                childImageSharp{
                    # specify image processing specifications in the query
                    sizes(maxWidth: 1000) {
                        ...GatsbyImageSharpSizes # from the gatsby-image component
                    }
                }
            }
          }
        }
      }
    }
  }
`;
