import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/projects.module.css'
import { graphql, Link } from "gatsby"

const Issues = ({ data }) => {
    // Get the articles from the data
    const articles = data.allMarkdownRemark.nodes

    // Use a Map to filter unique issues
    const uniqueIssues = [...new Map(articles.map(article => [article.frontmatter.issue, article])).values()]

    return (
        <Layout>
            <h2>পুরানো সংখ্যা</h2>
            <div className={styles.projects}>
                {uniqueIssues.map(a => {
                    const { issue } = a.frontmatter;
                    return (
                        <Link to={`/issues/${issue}`} key={a.id}>
                            <div>
                                <h3>{issue}</h3>
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
