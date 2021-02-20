import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const KsiazkiPage = () => (
  <Layout>
    <SEO title="Races page" />
    <Link className="return-link" to="/">
      Wróć
    </Link>
    <h3>Książki</h3>
  </Layout>
)

export default KsiazkiPage
