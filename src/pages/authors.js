import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/projects.module.css'
import { graphql, Link } from "gatsby"

const Issues = ({ data }) => {
    const articles = data.allMarkdownRemark.nodes

    // Use a Set to filter out unique authors
    const uniqueAuthors = [...new Map(articles.map(article => [article.frontmatter.author, article])).values()]

    return (
        <Layout>
            <h2>লেখক</h2>
            <div className={styles.projects}>
                {uniqueAuthors.map(a => {
                    const { author } = a.frontmatter;
                    return (
                        <Link to={`/authors/${author}`} key={a.id}>
                            <div>
                                <h3>{author}</h3>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </Layout>
    );
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
