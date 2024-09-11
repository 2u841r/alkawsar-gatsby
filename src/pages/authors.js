import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

const Authors = ({ data }) => {
    const articles = data.allMarkdownRemark.nodes

    const uniqueAuthors = [...new Map(articles.map(article => [article.frontmatter.author, article])).values()]

    return (
      <Layout>
      <h2 className="text-3xl font-bold text-center mt-2 mb-2">লেখক</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          {uniqueAuthors.map(a => {
              const { author } = a.frontmatter;
              return (
                  <Link to={`/authors/${author}`} key={a.id} className="no-underline">
                      <div className="bg-white bg-opacity-10 p-6 rounded-lg transition duration-300 hover:bg-opacity-20 hover:shadow-lg">
                          <h3 className="text-xl font-semibold text-center">{author}</h3>
                      </div>
                  </Link>
              );
          })}
      </div>
  </Layout>
    );
}

export default Authors

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
