import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'

import { useCopyLinkPopup } from '../utils/clipboard';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet';
import config from '../utils/config';

const ArticleDetails = ({ data }) => {
  const { showPopup, copyLinkToClipboard } = useCopyLinkPopup();
  const { html } = data.markdownRemark;
  const { author, category, issue, title } = data.markdownRemark.frontmatter;
  const { topics } = data.markdownRemark.frontmatter;
  const post = data.markdownRemark;
  // console.log(post)
  return (
    <Layout>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO postPath={`/articles/${post.frontmatter.an}`} postNode={post} postSEO />
      <div className="mt-5">
        {/* Category and Issue */}
        <div className="flex justify-between items-center mb-3 md:mb-5">
          <h3 className="text-lg md:text-2xl font-normal">
            <Link to={`/sections/${category}`}>{category}</Link>
          </h3>
          <p className="text-lg md:text-2xl font-normal">
            <Link to={`/issues/${issue}`}>{issue}</Link>
          </p>
        </div>

        {/* Title and Popup */}
        <div className="relative">
          <h2 id='title'
            onClick={copyLinkToClipboard} onKeyDown={copyLinkToClipboard} role="presentation"
            className="text-2xl md:text-4xl cursor-pointer"
          >
            {title}
          </h2>

          {/* Popup message */}
          {showPopup && (
            <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
              Link copied to clipboard!
            </div>
          )}

          <h3 className="text-lg md:text-xl font-normal mt-1">
            <Link to={`/authors/${author}`}>{author}</Link>
          </h3>
        </div>

        {/* Article Content */}
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>

        {/* Topics */}
        <div className="mt-5">
          <div className="flex flex-wrap items-center">
            <p className="font-bold text-lg mr-2">প্রসঙ্গসমূহ:</p>
            {topics.map((i) => (
              <Link
                className="bg-pink-600 m-1 mt-2 px-2 rounded text-white"
                to={`/topics/${i}`}
                key={i}
              >
                <span>{i}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className='flex'>
        <Link to='#navbar' className='my-5'> ↑ উপরে যান </Link>
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
      an
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