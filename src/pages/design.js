import React from "react"
import Preview from './../components/preview/Preview';

const DesignPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
 }) => {
  return (
    <div>
      <h1>Design</h1>
      <p>
        Lorem ipsum dolor sit amet, lorem ipsum.
      </p>

      {edges.map(edge =>
        <Preview key={edge.node.id} project={edge.node} />
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
          }
        }
      }
    }
  }
`;
