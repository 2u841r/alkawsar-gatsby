import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/article.module.css'
import { graphql, Link } from 'gatsby'

import { useCopyLinkPopup } from '../util/clipboard';

const ArticleDetails = ({ data }) => {
  const { showPopup, copyLinkToClipboard } = useCopyLinkPopup();
  const { html } = data.markdownRemark;
  const { author, category, issue, title } = data.markdownRemark.frontmatter;
  const { topics } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={styles.details}>
        <div className="flex justify-between items-center">
          <h3><Link to={`/sections/${category}`}>{category}</Link></h3>
          <p><Link to={`/issues/${issue}`}>{issue}</Link></p>
        </div>

        <div className="relative">
          <h2 onClick={copyLinkToClipboard} style={{ cursor: 'pointer' }}>
            {title}
          </h2>

          {/* Popup message */}
          {showPopup && (
            <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
              Link copied to clipboard!
            </div>
          )}
          <h3><Link to={`/authors/${author}`}>{author}</Link></h3>
        </div>
        
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}></div>

        <div>
          <div className="flex items-center">
            <p className="font-bold text-lg mr-2">প্রসঙ্গসমূহ:</p>
            {topics.map((i) => (
              <Link
                className="bg-pink-600 m-1 mt-2 px-2 rounded"
                to={`/topics/${i}`}
                key={i}
              >
                <span>{i}</span>
              </Link>
            ))}
          </div>
        </div>


      </div>
    </Layout>
  );
};

export default ArticleDetails;

export const query = graphql` 
query articleDetails($an: Int) {
  markdownRemark(frontmatter: {an: {eq: $an}}) {
    frontmatter {
      author
      category
      issue
      title
      topics
    }
    html
  }
}
`