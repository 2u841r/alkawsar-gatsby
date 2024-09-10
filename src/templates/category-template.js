import React from 'react'
import Layout from '../components/Layout'
// import * as styles from '../styles/article.module.css'
import * as styles from '../styles/projects.module.css'

import { graphql, Link} from "gatsby"

const categoryTemplate = ({data}) => {
  console.log(data)
  const allSectionArticles = data.allMarkdownRemark.nodes; 
  return ( 
   <Layout>
        <h3>বিভাগ- {allSectionArticles[0].frontmatter.category}</h3>
        <div className={styles.projects}>
        {
          allSectionArticles.map(a => {
            const { an, title, issue, author, category } = a.frontmatter;
            return <div key={an}  >
              <h3>  <Link to={`/issues/${issue}`} > {issue} </Link>  
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

export default categoryTemplate; 

export const query = graphql` 
query SectionQuery($category: String) {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: $category}}}) {
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