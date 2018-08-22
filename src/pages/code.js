import React from "react"
import Preview from './../components/preview/Preview';

const CodePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
 }) => {
  return (
    <div>
      <h1>Code</h1>
      <p>
        The full stack.
      </p>

      {edges.map(edge =>
        <Preview key={edge.node.id} project={edge.node} color="matcha" />
      )}

    </div>
  )
}

export default CodePage

export const pageQuery = graphql`
  query CodeQuery {
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
