import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/project.module.css'
import { graphql, Link } from "gatsby"

const Sections = ({ data }) => {
  const articles = data.allMarkdownRemark.nodes

  // Use a Set to filter out unique authors
  const uniqueSections = [...new Map(articles.map(article => [article.frontmatter.category, article])).values()]

  return (
    <Layout>
      <h2>বিভাগ</h2>
      <div className={styles.projects}>
        {uniqueSections.map(a => {
          const { author, category } = a.frontmatter;
          return (
            <Link to={`/sections/${category}`} key={a.id}>
              <div>
                <h3>{category}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export default Sections

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
