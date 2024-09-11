import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

const Sections = ({ data }) => {
  const articles = data.allMarkdownRemark.nodes

  const uniqueSections = [...new Map(articles.map(article => [article.frontmatter.category, article])).values()]

  return (
    <Layout>
      <h2 className="text-3xl font-bold text-center mt-2 mb-2">বিভাগ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {uniqueSections.map(a => {
          const { category } = a.frontmatter;
          return (
            <Link to={`/sections/${category}`} key={a.id} className="no-underline">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg transition duration-300 hover:bg-opacity-20 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-center">{category}</h3>
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
