import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import przymierze from "../images/przymierze.png"
import horda from "../images/horda.jpg"
import "../styles/rasy.scss"

const RacesPage = () => (
  <Layout>
    <SEO title="Races page" />
    <div className="races">
      <Link to="/">Wróć</Link>
      <hr />
      <h1>Rasy</h1>
      <div className="races-container">
        <div className="alliance">
          <h2>Przymierze</h2>
          <a href="/przymierze">
            <img src={przymierze} alt="przymierze" />
          </a>
        </div>

        <div className="horde">
          <h2>Horda</h2>
          <a href="/horda">
            <img src={horda} alt="horda" />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default RacesPage
