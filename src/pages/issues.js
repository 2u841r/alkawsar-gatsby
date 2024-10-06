import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { SEO } from "../components/SEO"
import config from "../utils/config"

const Issues = ({ data }) => {
  // console.log(data)
  const articles = data.allMarkdownRemark.nodes
  const image2 = data.allImageSharp.nodes
  const uniqueIssues = [...new Map(articles.map(article => [article.frontmatter.issue, article])).values()]

  return (
    <Layout>
      <Helmet title={`সকল সংখ্যা | ${config.siteTitle}`} />
      <SEO />
      <h2 className="text-3xl font-bold text-center mt-2 mb-2">পুরানো সংখ্যা</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

        {uniqueIssues.map((a, b) => {
          const { issue } = a.frontmatter;
          const x = getImage(image2[b])
          return (
            <Link to={`/issues/${issue}`} key={a.id} className="no-underline">
              <div className="bg-white bg-opacity-25 p-6 rounded-lg transition duration-300 hover:bg-opacity-50 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-center">{issue}</h3>
                {/* {console.log(b)} */}
                {/* <img className="size-40" src={image2[b].fluid.src} /> */}
                {/* <GatsbyImage image={image2} /> */}
                {/* <GatsbyImage getImage={image[b]} /> */}
                <div className="flex justify-center items-center">
                  <GatsbyImage className="mt-2 rounded" image={x} alt="Image description" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  )
}

export default Issues

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {an: DESC}}) {
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
  allImageSharp(sort: {fixed: {originalName: DESC}}) {
    nodes {
      gatsbyImageData
    }
  }
}
`
