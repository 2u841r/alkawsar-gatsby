import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'

import { useCopyLinkPopup } from '../util/clipboard';

const ArticleDetails = ({ data }) => {
    const { showPopup, copyLinkToClipboard } = useCopyLinkPopup();
    const { html } = data.markdownRemark;
    const { author, category, issue, title } = data.markdownRemark.frontmatter;
    const { topics } = data.markdownRemark.frontmatter;

    // Function to split content into three parts
    const splitContent = (html) => {
        const element = document.createElement('div');
        element.innerHTML = html;

        const words = element.innerText.split(' ');
        const third = Math.floor(words.length / 3);

        const firstPart = words.slice(0, third).join(' ');
        const secondPart = words.slice(third, 2 * third).join(' ');
        const thirdPart = words.slice(2 * third).join(' ');

        // Create new HTML elements to avoid cutting tags
        const firstContent = document.createElement('div');
        firstContent.innerText = firstPart;

        const secondContent = document.createElement('div');
        secondContent.innerText = secondPart;

        const thirdContent = document.createElement('div');
        thirdContent.innerText = thirdPart;

        return [firstContent.innerHTML, secondContent.innerHTML, thirdContent.innerHTML];
    };

    const [firstContent, secondContent, thirdContent] = splitContent(html);


    return (
        <Layout>
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
                    <h2
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
                {/* <div
          className="mt-5 text-justify grid grid-cols-2 gap-4"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div> */}

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col min-h-full">
                        <div
                            className="flex-1 overflow-auto text-justify"
                            dangerouslySetInnerHTML={{ __html: firstContent }}
                        ></div>
                    </div>
                    <div className="flex flex-col min-h-full">
                        <div
                            className="flex-1 overflow-auto text-justify"
                            dangerouslySetInnerHTML={{ __html: secondContent }}
                        ></div>
                    </div>
                    <div className="flex flex-col min-h-full">
                        <div
                            className="flex-1 overflow-auto text-justify"
                            dangerouslySetInnerHTML={{ __html: thirdContent }}
                        ></div>
                    </div>
                </div>

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