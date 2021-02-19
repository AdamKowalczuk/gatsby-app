// import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// // import Menu from "../components/menu"
// import "../styles/blog.scss"
// const BlogPage = ({ data }) => (
//   <Layout>
//     {/* <Menu /> */}
//     <div className="blog-container">
//       <h1>Ostatnie posty</h1>
//       {data.allMarkdownRemark.edges.map(post => (
//         <div key={post.node.id} className="recent-post">
//           <h3>{post.node.frontmatter.title}</h3>
//           {/* <img src={post.node.frontmatter.image} alt="blog-image" /> */}

//           <small>Opublikowane przez {post.node.frontmatter.author}</small>
//           <br />
//           <small>{post.node.frontmatter.date}</small>
//           <br />
//           {/* <br /> */}
//           <Link to={post.node.frontmatter.path}>Dowiedz się więcej</Link>
//           <br />
//           {/* <br />
//           <hr /> */}
//         </div>
//       ))}
//       <br />
//       <br />
//       <hr />
//     </div>
//   </Layout>
// )

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             date
//             author
//           }
//         }
//       }
//     }
//   }
// `

// export default BlogPage
