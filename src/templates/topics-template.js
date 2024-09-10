import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/projects.module.css'
import { graphql, Link } from "gatsby"

const TopicsTemplate = ({ data, pageContext }) => {
  const allTopicsArticles = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <h3>বিষয়- {pageContext.topic}</h3>
      <div className={styles.projects}>
        {allTopicsArticles.map(article => {
          const { an, title, issue, author, category } = article.frontmatter;
          return (
            <div key={an}>
              <h3>
                <Link to={`/issues/${issue}`}>{issue}</Link>
              </h3>
              <h1>
                <Link to={`/articles/${an}`}>{title}</Link>
              </h1>
              <h3>
                <Link to={`/authors/${author}`}>{author}</Link>
              </h3>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default TopicsTemplate;

export const query = graphql`
  query TopicsQuery($topic: String) {
    allMarkdownRemark(filter: {frontmatter: {topics: {in: [$topic]}}}) {
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
`;