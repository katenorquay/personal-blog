import React, {Fragment} from "react";
import { graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from './styles.module.scss'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Fragment>
      <Header/>
        <div className={styles.pageContainer}>
          <div className={styles.contentContainer}>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <p className={styles.elipsis}> . . . </p>
        </div>
      <Footer/>
    </Fragment>
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
