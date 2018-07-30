import React from "react"
import Preview from './../components/preview/Preview';

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2>Design</h2>

      {data.allFile.edges.map(({ node }, index) =>
        <Preview key={index} name={node.relativePath}/>
      )}

      {/* <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) =>
            <Preview key={index} name={node.relativePath}>
              <td>
                {node.relativePath}
              </td>
              <td>
                {node.prettySize}
              </td>
              <td>
                {node.extension}
              </td>
              <td>
                {node.birthTime}
              </td>
            </Preview>
          )}
        </tbody>
      </table> */}
    </div>
  )
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
