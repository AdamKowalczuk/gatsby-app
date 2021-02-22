import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/profesje.scss"
import mage from "../images/mage.png"
import rogue from "../images/rogue.png"
import demon_hunter from "../images/demon-hunter.png"
import druid from "../images/druid.png"
import shaman from "../images/shaman.png"
import paladin from "../images/paladin.png"
import priest from "../images/priest.png"
import warlock from "../images/warlock.png"
import black_knight from "../images/black-knight.png"
import warrior from "../images/warrior.png"

const ProfesjePage = () => (
  <Layout>
    <SEO title="Profesje postaci" />
    <Link className="return-link" to="/">
      Wróć
    </Link>
    <div className="class-container">
      <h1>Profesje</h1>
      <div className="class-box">
        <div className="class">
          <img src={warrior} alt="warrior" />
          <div className="class-text">
            <h3>Wojownik</h3>
            <p>
              Wojownicy to wykwalifikowani żołnierze, którzy łączą w sobie siłę
              mięśni, umiejętność posługiwania się bronią oraz obycie w sztucę
              wojennej.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={rogue} alt="rogue" />
          <div className="class-text yellow-text">
            <h3>Łotrzyk</h3>
            <p>
              Jest to klasa skupiająca się na zadawaniu szybkich i potężnych
              ciosów. Łotrzyk znany jest ze swojej umiejętności ukrywania się,
              która daje mu bardzo ważny w bitwie efekt zaskoczenia.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={demon_hunter} alt="demon-hunter" />
          <div className="class-text yellow-text">
            <h3>Łowca demonów</h3>
            <p>
              Poświecili całe swoje życie, by walczyć z Legionem. Cechuje ich
              specyficzny wygląd tj. rogi, wypalone oczy, tatuaże. Używają do
              walki glewii, tak jak ich mistrz Illidan.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={shaman} alt="shaman" />
          <div className="class-text">
            <h3>Shaman</h3>
            <p>
              Szamani są duchowymi przewodnikami plemion i klanów. Korzystają z
              mocy żywiołów, czyli wody, ognia, powietrza i ziemi! Atrybutem
              szamanów jest totem mocy.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={paladin} alt="paladin" />
          <div className="class-text">
            <h3>Paladyn</h3>
            <p>
              Paladyni to rycerze prowadzeni przez światłość. Charakteryzują ich
              złociste zbroje. Niosą światło tam, gdzie jest mrok i niosą
              sprawiedliwość tam, gdzie jest bezprawie.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={black_knight} alt="black-knight" />
          <div className="class-text yellow-text">
            <h3>Czarny rycerz</h3>
            <p>
              Jest to grupa ożywionych rycerzy, paladynów, która uwolniła się
              spod kontroli Arthasa. Gdy odzyskali własną wolę, postanowili
              stanąć u boku Przymierza i Hordy w walce z Królem Liszem.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={druid} alt="druid" />
          <div className="class-text yellow-text even">
            <h3>Druid</h3>
            <p>
              Zostali wybudzeni ze szmaragdowego snu, podczas drugiej inwazji
              Płonącego Legionu. Żyją w symbiozie z naturą, dbają o nią, a w
              zamian korzystają z jej mocy.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={mage} alt="mage" />
          <div className="class-text">
            <h3>Mag</h3>
            <p>
              Magowie to jedna z najpotężniejszych i najbardziej wpływowych grup
              w Azeroth. Potrafią zaskoczyć wroga niesamowicie mocnymi
              zaklęciami. Potrafią tworzyć portale, które mogą znacznie ułatwić
              im i ich sojusznikom podróżowanie.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={warlock} alt="warlock" />
          <div className="class-text">
            <h3>Czarnoksiężnik</h3>
            <p>
              To pewnego rodzaju magowie, którzy bardzo dobrze opanowali tajniki
              czarnej magi. Mogą trawić wrogów ogniem, rzucać na niego
              przerażające klątwy oraz napuszczać potężne demony.
            </p>
          </div>
        </div>
        <div className="class">
          <img src={priest} alt="priest" />
          <div className="class-text">
            <h3>Kapłan</h3>
            <p>
              Religijni, oddani światłości... dają świadectwo swojej wiary,
              służąc innym. Kapłani są niezwykle pożądani na polach bitwy, gdyż
              potrafią posługiwać się niezwykle silnymi zaklęciami
              uzdrawiającymi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProfesjePage
