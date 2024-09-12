import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from "gatsby"

const authorTemplate = ({ data }) => {
  // console.log(data)
  const hisAllArticles = data.allMarkdownRemark.nodes;
  return (
    <Layout>
     
     <h3 className="text-3xl font-bold text-center mt-2 mb-2"> লেখক- {hisAllArticles[0].frontmatter.author}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {hisAllArticles.map(a => {
          const { an, title, issue, author, category } = a.frontmatter;
          return (
            <Link to={`/articles/${an}`} key={a.id} className="no-underline">
              <div className="bg-white bg-opacity-10 hover:bg-opacity-15 transition-colors duration-300 p-4 rounded-lg h-44 w-full flex flex-col justify-between">
                <h5 className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                  <Link to={`/issues/${issue}`} className="hover:underline">{issue}</Link> :  &nbsp;
                  <Link to={`/sections/${category}`} className="hover:underline">{category}</Link>
                </h5>
                <h1 className="text-xl font-bold my-2 overflow-hidden line-clamp-3">{title}</h1>
                <h3 className="text-base mt-auto overflow-hidden text-ellipsis whitespace-nowrap">
                  <Link to={`/authors/${author}`} className="hover:underline">{author}</Link>
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  )
}

export default authorTemplate;

export const query = graphql` 
query authorTemplate($author: String) {
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