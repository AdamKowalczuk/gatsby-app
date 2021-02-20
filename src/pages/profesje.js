import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProfesjePage = () => (
  <Layout>
    <SEO title="Profesje postaci" />
    <Link className="return-link" to="/">
      Wróć
    </Link>
    <h3>Profesje</h3>
  </Layout>
)

export default ProfesjePage
