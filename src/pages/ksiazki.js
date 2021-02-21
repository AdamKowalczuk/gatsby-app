import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import cienie_hordy from "../images/cienie-hordy.jpg"
import cisza_przed_burza from "../images/cisza-przed-burza.jpg"
import fale_ciemnosci from "../images/fale-ciemnosci.jpg"
import illidan from "../images/illidan.jpg"
import krag_nienawisci from "../images/krag-nienawisci.jpg"
import kroniki1 from "../images/kroniki1.jpg"
import kroniki2 from "../images/kroniki2.jpg"
import malfurion from "../images/malfurion.jpg"
import narodziny_hordy from "../images/narodziny-hordy.jpg"
import ostatni_straznik from "../images/ostatni-straznik.jpg"
import przebudzenie_cieni from "../images/przebudzenie-cieni.jpg"
import przebudzenie_krola_lisza from "../images/przebudzenie-krola-lisza.jpg"
import przez_mroczny_portal from "../images/przez-mroczny-portal.jpg"
import wedrowiec from "../images/wedrowiec.jpg"
import wichry_wojny from "../images/wichry-wojny.jpg"
import zbrodnie_wojenne from "../images/zbrodnie-wojenne.jpg"
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
        <a href="/zbrodnie-wojenne">
          <img src={zbrodnie_wojenne} alt="zbrodnie-wojenne" />
        </a>
        <a href="/kronika2">
          <img src={kroniki2} alt="kroniki2" />
        </a>
        <a href="/fale-ciemnosci">
          <img src={fale_ciemnosci} alt="fale-ciemnosci" />
        </a>
        <a href="/narodziny-hordy">
          <img src={narodziny_hordy} alt="narodziny-hordy" />
        </a>
        <a href="/przebudzenie-krola-lisza">
          <img src={przebudzenie_krola_lisza} alt="przebudzenie-krola-lisza" />
        </a>
        <a href="/wedrowiec">
          <img src={wedrowiec} alt="wedrowiec" />
        </a>
        <a href="/illidan">
          <img src={illidan} alt="illidan" />
        </a>
        <a href="/krag-nienawisci">
          <img src={krag_nienawisci} alt="krag-nienawisci" />
        </a>
        <a href="/ostatni-straznik">
          <img src={ostatni_straznik} alt="ostatni-straznik" />
        </a>
        <a href="przebudzenie-cieni">
          <img src={przebudzenie_cieni} alt="przebudzenie-cieni" />
        </a>
        <a href="/przez-mroczny-portal">
          <img src={przez_mroczny_portal} alt="przez-mroczny-portal" />
        </a>
        <a href="/malfurion">
          <img src={malfurion} alt="malfurion" />
        </a>
        <a href="/wichry-wojny">
          <img src={wichry_wojny} alt="wichry-wojny" />
        </a>
        <a href="/kronika1">
          <img src={kroniki1} alt="kroniki1" />
        </a>
        <a href="/cienie-hordy">
          <img src={cienie_hordy} alt="cienie-hordy" />
        </a>
        <a href="/przez-mroczny-portal">
          <img src={cisza_przed_burza} alt="cisza-przed-burza" />
        </a>
      </div>
    </div>
  </Layout>
)

export default KsiazkiPage
