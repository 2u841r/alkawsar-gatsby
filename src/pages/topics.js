import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { SEO } from "../components/SEO"
import config from "../utils/config"

const Topics = ({ data }) => {
    const articles = data.allMarkdownRemark.nodes

    const allTopics = new Set()
    articles.forEach(article => {
        if (Array.isArray(article.frontmatter.topics)) {
            article.frontmatter.topics.forEach(topic => allTopics.add(topic))
        }
    })

    const uniqueTopics = Array.from(allTopics)

    return (
        <Layout>
            <Helmet title={`বিষয়সমূহ | ${config.siteTitle}`} />
            <SEO />
            <h2 className="text-3xl font-bold text-center mt-2 mb-2">বিষয়সমূহ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {uniqueTopics.map(topic => (
                    <Link to={`/topics/${topic}`} key={topic} className="no-underline">
                        <div className="bg-white bg-opacity-25 p-6 rounded-lg transition duration-300 hover:bg-opacity-50 hover:shadow-lg">
                            <h3 className="text-xl font-semibold text-center">{topic}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export default Topics

export const query = graphql`
query TopicsQuery {
  allMarkdownRemark(sort: {frontmatter: {issue: DESC}}) {
    nodes {
      frontmatter {
        an
        title
        issue
        topics
      }
      id
    }
  }
}
`