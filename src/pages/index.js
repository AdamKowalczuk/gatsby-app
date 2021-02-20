// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// // import Menu from "../components/menu"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     {/* <Menu /> */}
//     <h1>Strona poświęcona uniwersum Warcrafta</h1>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     {/* <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
//   </Layout>
// )

// export default IndexPage

import React from "react"
// import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/blog.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="blog-container">
      <h1>Ostatnie posty</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} className="recent-post">
          <h3>{post.node.frontmatter.title}</h3>
          {/* <img src={post.node.frontmatter.image} alt="blog-image" /> */}

          <small>Opublikowane przez {post.node.frontmatter.author}</small>
          <br />
          <small>{post.node.frontmatter.date}</small>
          <br />
          {/* <br /> */}
          <Link to={post.node.frontmatter.path}>Dowiedz się więcej</Link>
          <br />
          {/* <br />
          <hr /> */}
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default IndexPage
