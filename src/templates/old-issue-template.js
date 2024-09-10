import React from 'react'
import Layout from '../components/Layout'
// import * as styles from '../styles/article.module.css'
import * as styles from '../styles/projects.module.css'

import { graphql, Link} from "gatsby"

const oldIssues = ({data}) => {
  console.log(data)
  const oldIssuesArticles = data.allMarkdownRemark.nodes; 
  return ( 
   <Layout>
   <h3> সংখ্যা- {oldIssuesArticles[0].frontmatter.issue}</h3>
        <div className={styles.projects}>
        {
          oldIssuesArticles.map(a => {
            const { an, title, issue, author, category } = a.frontmatter;
            return <div key={an}  >
              <h3>  <Link to={`/issues/${issue}`} > {issue} </Link>  -  <Link to={`/sections/${category}`} > {category} </Link>
              {/* <Link to={`/sections/${category}`} > {category} </Link> */}
              </h3>
              <h1> <Link to={`/articles/${an}`}>{title} </Link> </h1>
              <h3> <Link to={`/authors/${author}`} > {author} </Link> </h3>
            </div>
            // return <Link to={`/articles/${an}`} key={a.id}> <h1> {title} </h1> </Link>
          })
        }
      </div>
   </Layout>
  )
}

export default oldIssues; 

export const query = graphql` 
query AuthorQuery2($issue: String) {
  allMarkdownRemark(filter: {frontmatter: {issue: {eq: $issue}}}) {
    nodes {
      frontmatter {
        an
        issue
        title
        author
        category
      }
      id
    }
  }
}
`