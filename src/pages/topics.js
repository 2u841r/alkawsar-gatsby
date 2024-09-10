import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/projects.module.css'
import { graphql, Link } from "gatsby"

const Topics = ({ data }) => {
    const articles = data.allMarkdownRemark.nodes

    // Create a Set of all unique topics
    const allTopics = new Set()
    articles.forEach(article => {
        if (Array.isArray(article.frontmatter.topics)) {
            article.frontmatter.topics.forEach(topic => allTopics.add(topic))
        }
    })

    // Convert Set to Array for mapping
    const uniqueTopics = Array.from(allTopics)

    return (
        <Layout>
            <h2>বিষয়সমূহ</h2>
            <div className={styles.projects}>
                {uniqueTopics.map(topic => (
                    <Link to={`/topics/${topic}`} key={topic}>
                        <div>
                            <h3>{topic}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export default Topics

export const query = graphql`
query TopicsQuery {
  allMarkdownRemark(sort: {frontmatter: {issue: DESC}}) {
    nodes {
      frontmatter {
        an
        title
        issue
        topics
      }
      id
    }
  }
}
`