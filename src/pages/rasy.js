import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/rasy.scss"
import human from "../images/human.png"
import gnome from "../images/gnome.png"
import night_elf from "../images/night-elf.png"
import orc from "../images/orc.png"
import worgen from "../images/worgen.png"
import dranei from "../images/dranei.png"
import blood_elf from "../images/blood-elf.png"
import troll from "../images/troll.png"
import dwarf from "../images/dwarf.png"
import tauren from "../images/tauren.png"
import undead from "../images/undead.png"
import pandaren from "../images/pandaren.png"
import goblin from "../images/goblin.png"
import horde from "../images/HordeCrest.jpg"
import alliance from "../images/AllianceCrest.jpg"
import pandarenCrest from "../images/PandarenCrest.jpg"

const RacePage = () => (
  <Layout>
    <SEO title="Rasy Warcrafta" />
    <Link className="return-link" to="/">
      Wróć
    </Link>
    <div className="race-container">
      <h1>Rasy</h1>
      <div className="race-images">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/ludzie">
                <img src={human} alt="człowiek" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/ludzie">
                <img src={alliance} alt="przymierze" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/orkowie">
                <img src={orc} alt="ork" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/orkowie">
                <img src={horde} alt="horda" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/pandareni">
                <img src={pandaren} alt="pandaren" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/pandareni">
                <img src={pandarenCrest} alt="pandaren-crest" />
              </a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/worgeni">
                <img src={worgen} alt="worgen" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/worgeni">
                <img src={alliance} alt="przymierze" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/dranei">
                <img src={dranei} alt="dranei" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/dranei">
                <img src={alliance} alt="przymierze" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/krasnoludy">
                <img src={dwarf} alt="krasnolud" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/krasnoludy">
                <img src={alliance} alt="przymierze" />
              </a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/krwawy-elf">
                <img src={blood_elf} alt="krawawy-elf" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/krwawy-elf">
                <img src={horde} alt="horda" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/troll">
                <img src={troll} alt="troll" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/troll">
                <img src={horde} alt="horda" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/gnom">
                <img src={gnome} alt="gnom" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/gnom">
                <img src={alliance} alt="przymierz" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/tauren">
                <img src={tauren} alt="tauren" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/tauren">
                <img src={horde} alt="horda" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/nieumarly">
                <img src={undead} alt="nieumarly" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/nieumarly">
                <img src={horde} alt="horda" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/nocny-elf">
                <img src={night_elf} alt="nocny-elf" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/nocny-elf">
                <img src={alliance} alt="przymierz" />
              </a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <a href="/goblin">
                <img src={goblin} alt="goblin" />
              </a>
            </div>
            <div className="flip-card-back">
              <a href="/goblin">
                <img src={horde} alt="horda" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default RacePage
