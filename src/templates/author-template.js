import React from 'react'
import Layout from '../components/Layout'
// import * as styles from '../styles/article.module.css'
import * as styles from '../styles/projects.module.css'

import { graphql, Link } from "gatsby"

const authorTemplate = ({ data }) => {
  console.log(data)
  const hisAllArticles = data.allMarkdownRemark.nodes;
  return (
    <Layout>
     
        <h2>লেখক- {hisAllArticles[0].frontmatter.author}</h2>
        <div className={styles.projects}>
        {
          hisAllArticles.map(a => {
            const { an, title, issue, author, category } = a.frontmatter;
            return <div key={an} >
              <h3>  <Link to={`/issues/${issue}`} > {issue} </Link> -  <Link to={`/sections/${category}`} > {category} </Link></h3>
              <h1> <Link to={`/articles/${an}`}>{title} </Link> </h1>
              {/* <h3> <Link to={`/authors/${author}`} > {author} </Link> </h3> */}
            </div>
            // return <Link to={`/articles/${an}`} key={a.id}> <h1> {title} </h1> </Link>
          })
        }
      </div>
    </Layout>
  )
}

export default authorTemplate;

export const query = graphql` 
query AuthorQuery2($author: String) {
  allMarkdownRemark(filter: {frontmatter: {author: {eq: $author}}}) {
    nodes {
      frontmatter {
        an
        title
        author
        issue
        category
      }
      id
    }
  }
}
`

// export const query = graphql`
// query MyQuery($author: String) {
//   markdownRemark(frontmatter: {author: {eq: $author}}) {
//     frontmatter {
//       title
//       an
//     }
//     html
//   }
// }
// `