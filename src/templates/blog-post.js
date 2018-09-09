import React from "react";

import styles from './styles.module.scss'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <p className={styles.elipsis}> . . . </p>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
