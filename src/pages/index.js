// import * as React from "react"
// import Layout from "../components/Layout"
// import * as styles from '../styles/home.module.css'
// import { graphql, Link } from "gatsby"

// export default function Home({ data }) {

//   const { description, title: siteTitle } = data.site.siteMetadata;
//   const articles = data.allMarkdownRemark.nodes;
//   return <div>
//     <Layout>
//       <section className={styles.header}>
//         <div>
//           <h2>{siteTitle}</h2>
//           <h3>Develop & Deploy</h3>
//           <p>{description}</p>
//           <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
//         </div>
        
//         <div>
//           {
//             articles.map(a => {
//               const { id, title, issue, author, category } = a.frontmatter;
//               return <div style={{display: "flex"}} key={id}>
//                  <p> {title}</p>
//                  <p> {category}</p>
//               </div>

//               // <Link to={id} key={id}> {title} {issue} </Link>

//             })}

//         </div>
//       </section>
//     </Layout>
//   </div>
// }

// export const query = graphql`
// query MyQuery2 {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         title
//         issue
//         category
//         author
//       }
//       id
//     }
//   }
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }
  
// `


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
                        return <Link to={`/articles/${an}`} key={a.id}>
                            <div >
                                <h5>  <Link to={`/issues/${issue}`} > {issue} </Link> : <Link to={`/sections/${category}`} > {category} </Link></h5>
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
  allMarkdownRemark(
    sort: {frontmatter: {issue: DESC}}
    filter: {frontmatter: {issue: {eq: "September 2024"}}}
  ) {
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