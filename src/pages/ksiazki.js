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
import ksiazka7 from "../images/ksiazka7.jpg"
import ksiazka8 from "../images/ksiazka8.jpg"
import ksiazka9 from "../images/ksiazka9.jpg"
import ksiazka10 from "../images/ksiazka10.jpg"
import ksiazka11 from "../images/ksiazka11.jpg"
import ksiazka12 from "../images/ksiazka12.jpg"
import ksiazka13 from "../images/ksiazka13.jpg"
import ksiazka14 from "../images/ksiazka14.jpg"
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
          <img src={ksiazka1} alt="cienie-hordy" />
        </a>
        <a href="/wichry-wojny">
          <img src={ksiazka2} alt="wichry-wojny" />
        </a>
        <a href="/krag-nienawisci">
          <img src={ksiazka3} alt="krag-nienawisci" />
        </a>
        <a href="/illidan">
          <img src={ksiazka4} alt="illidan" />
        </a>
        <a href="/cisza-przed-burza">
          <img src={ksiazka5} alt="cisza-przed-burza" />
        </a>
        <a href="/kronika2">
          <img src={ksiazka6} alt="kronika2" />
        </a>
        <a href="/zbrodnie-wojenne">
          <img src={ksiazka7} alt="zbrodnie-wojenne" />
        </a>
        <a href="/kroniki1">
          <img src={ksiazka8} alt="kroniki1" />
        </a>
        <a href="/fale-ciemnosci">
          <img src={ksiazka9} alt="fale-ciemnosci" />
        </a>
        <a href="/malfurion">
          <img src={ksiazka10} alt="malfurion" />
        </a>
        <a href="/narodziny-hordy">
          <img src={ksiazka11} alt="narodziny-hordy" />
        </a>
        <a href="/ostatni-straznik">
          <img src={ksiazka12} alt="ostatni-straznik" />
        </a>
        <a href="/przebudzenie-cieni">
          <img src={ksiazka13} alt="przebudzenie-cieni" />
        </a>
        <a href="/przez-mroczny-portal">
          <img src={ksiazka14} alt="przez-mroczny-portal" />
        </a>
      </div>
    </div>
  </Layout>
)

export default KsiazkiPage
