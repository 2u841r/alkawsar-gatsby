const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            an
            issue
            author
            category
            topics
          }
        }
      }
    }
  `)

  // Create pages for articles, issues, authors, and categories
  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: '/articles/' + node.frontmatter.an,
      component: path.resolve('./src/templates/article-template.js'),
      context: { an: node.frontmatter.an }
    })

    createPage({
      path: '/issues/' + node.frontmatter.issue,
      component: path.resolve('./src/templates/old-issue-template.js'),
      context: { issue: node.frontmatter.issue }
    })

    createPage({
      path: '/authors/' + node.frontmatter.author,
      component: path.resolve('./src/templates/author-template.js'),
      context: { author: node.frontmatter.author }
    })

    createPage({
      path: '/sections/' + node.frontmatter.category,
      component: path.resolve('./src/templates/category-template.js'),
      context: { category: node.frontmatter.category }
    })
  })

  // Handle topics (which are now arrays)
  const topicsSet = new Set()

  data.allMarkdownRemark.nodes.forEach(node => {
    if (Array.isArray(node.frontmatter.topics)) {
      node.frontmatter.topics.forEach(topic => {
        topicsSet.add(topic)
      })
    }
  })

  topicsSet.forEach(topic => {
    createPage({
      path: `/topics/${topic}`,
      component: path.resolve('./src/templates/topics-template.js'),
      context: { topic }
    })
  })
}