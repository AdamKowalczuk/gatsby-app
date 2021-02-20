import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../styles/blog-post.scss"
export default function Template({ data }) {
  const post = (data = data.markdownRemark)

  return (
    <Layout>
      <Link className="return-link" to="/">
        Wróć
      </Link>
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
        <small>Opublikowane przez {post.frontmatter.author}</small>
        <br />
        <small>{post.frontmatter.date}</small>
      </div>
      {/* <Menu /> */}
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
