import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/article.module.css'
import { graphql, Link } from 'gatsby'

const articleDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { author, category, issue, title } = data.markdownRemark.frontmatter;
  const { topics } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className={styles.details}>
        <p> {issue}</p>
        <h3>{category}</h3>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}>

        </div>
        {
          topics.map(i => {
            return <Link to={`/topics/${i}`} key={i}> {i} </Link>
          })
        }
      </div>
    </Layout>
  )
}

export default articleDetails

export const query = graphql` 
query articleDetails($an: Int) {
  markdownRemark(frontmatter: {an: {eq: $an}}) {
    frontmatter {
      author
      category
      issue
      title
      topics
    }
    html
  }
}
`