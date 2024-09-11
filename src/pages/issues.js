import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/project.module.css'
import { graphql, Link } from "gatsby"

const Issues = ({ data }) => {
    // Get the articles from the data
    const articles = data.allMarkdownRemark.nodes

    // Use a Map to filter unique issues
    const uniqueIssues = [...new Map(articles.map(article => [article.frontmatter.issue, article])).values()]

    return (
<Layout>
  <h2 className="text-3xl font-bold text-center mt-2 mb-2">পুরানো সংখ্যা</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {uniqueIssues.map(a => {
      const { issue } = a.frontmatter;
      return (
        <Link to={`/issues/${issue}`} key={a.id} className="no-underline">
          <div className="bg-white bg-opacity-10 p-4 rounded-lg transition duration-300 hover:bg-opacity-20 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-center">{issue}</h3>
          </div>
        </Link>
      );
    })}
  </div>
</Layout>
    )
}

export default Issues

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {issue: DESC}}) {
    nodes {
      frontmatter {
        an
        title
        issue
        category
        author
      }
      id
    }
  }
}
`
