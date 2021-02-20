import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ksiazka1 from "../images/ksiazka1.jpg"
import ksiazka2 from "../images/ksiazka2.jpg"
import ksiazka3 from "../images/ksiazka3.jpg"
import ksiazka4 from "../images/ksiazka4.jpg"
import ksiazka5 from "../images/ksiazka5.jpg"
import ksiazka6 from "../images/ksiazka6.jpg"
import "../styles/ksiazki.scss"

const KsiazkiPage = () => (
  <Layout>
    <SEO title="Książki Warcrafta" />
    <Link className="return-link" to="/">
      Wróć
    </Link>

    <div className="books-container">
      <h1>Książki</h1>
      <div className="books-image">
        <a href="/cienie-hordy">
          <img src={ksiazka1} alt="ksiazka1" />
        </a>
        <a href="/wichry-wojny">
          <img src={ksiazka2} alt="ksiazka2" />
        </a>
        <a href="/krag-nienawisci">
          <img src={ksiazka3} alt="ksiazka3" />
        </a>
        <a href="/illidan">
          <img src={ksiazka4} alt="ksiazka4" />
        </a>
        <a href="/cisza-przed-burza">
          <img src={ksiazka5} alt="ksiazka5" />
        </a>
        <a href="/kronika2">
          <img src={ksiazka6} alt="ksiazka6" />
        </a>
      </div>
    </div>
  </Layout>
)

export default KsiazkiPage
