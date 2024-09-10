import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/projects.module.css'
import { graphql, Link } from "gatsby"

const Projects = ({ data }) => {
  // console.log(data)
  const articles = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.projects}>
        {
          articles.map(a => {
            const { an, title, issue, author, category } = a.frontmatter;
            return <Link to={an} key={a.id}>
              <div >
                <h5>  <Link to={`/issues/${issue}`} > {issue} </Link> -  <Link to={`/sections/${category}`} > {category} </Link></h5>
                <h1> {title}</h1>
                <h3> <Link to={`/authors/${author}`} > {author} </Link> </h3>
              </div>
            </Link>
            // <Link to={id} key={id}> {title} {issue} </Link>
          })}

      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {issue: DESC}})  {
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