import * as React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { SEO } from "../components/SEO"

const Projects = ({ data }) => {
  // console.log(data)
  const articles = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Helmet title={`সব প্রবন্ধ`} />
      <SEO />
      <h2 className="text-3xl font-bold text-center my-2">সব প্রবন্ধ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {articles.map(a => {
          const { an, title, issue, author, category } = a.frontmatter;
          return (
            <Link to={`/articles/${an}`} key={a.id} className="no-underline">
              <div className="bg-white bg-opacity-25 hover:bg-opacity-50 transition-colors duration-300 p-4 rounded-lg h-44 w-full flex flex-col justify-between">
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

export default Projects

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {an: DESC}})  {
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