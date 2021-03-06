import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/blog.scss"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Strona główna" />
    <div className="blog-container">
      <h1>Ostatnie posty</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} className="recent-post">
          <small>Opublikowano : {post.node.frontmatter.date}</small>
          <h3>{post.node.frontmatter.title}</h3>
          <img
            src={post.node.frontmatter.image.childImageSharp.original.src}
            alt={post.node.frontmatter.title}
          />
          <br />
          <Link to={post.node.frontmatter.path}>Dowiedz się więcej</Link>
          <br />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      limit: 8
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            image {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
