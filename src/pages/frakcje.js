import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import przymierze from "../images/AllianceCrest.jpg"
import horda from "../images/HordeCrest.jpg"
import "../styles/frakcje.scss"

const FractionPage = () => (
  <Layout>
    <SEO title="Rasy Warcrafta" />
    <Link className="return-link" to="/">
      Wróć
    </Link>
    <div className="races">
      <h1>Rasy</h1>
      <div className="races-container">
        <div className="alliance">
          <h2>Przymierze</h2>
          <blockquote>
            <q>
              Ludzie, nocne elfy, krasnoludy, gnomy, draenei i dzicy worgeni
              tworzą wspaniałe Przymierze. Dumne i szlachetne, odważne i mądre
              rasy pracują razem, by zachować ład w Azeroth. Przymierze kieruje
              się honorem i tradycją. Jego władcy to wybrańcy sprawiedliwości,
              nadziei, wiedzy i wiary.
            </q>
          </blockquote>

          <a href="/przymierze">
            <img src={przymierze} alt="przymierze" />
          </a>
        </div>

        <div className="horde">
          <h2>Horda</h2>
          <blockquote>
            <q>
              W Hordzie akcja i siła są cenione ponad dyplomację, a jej
              przywódcy zdobywają szacunek ostrza, nie tracąc czasu na politykę.
              Brutalność bohaterów Hordy jest skoncentrowana, dając głos tym,
              którzy walczą o przetrwanie!
            </q>
          </blockquote>
          <a href="/horda">
            <img src={horda} alt="horda" />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default FractionPage
