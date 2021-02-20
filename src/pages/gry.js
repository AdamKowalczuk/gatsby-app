import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GryPage = () => (
  <Layout>
    <SEO title="Gry Warcrafta" />
    <Link className="return-link" to="/">
      Wróć
    </Link>
    <h3>Gry</h3>
  </Layout>
)

export default GryPage
