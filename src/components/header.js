import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333643`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#cdad61`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3>
        <Link to="/rasy">Rasy</Link>
      </h3>
      <h3>
        <Link to="/klasy">Klasy</Link>
      </h3>
      <h3>
        <Link to="/gry">Gry</Link>
      </h3>
      <h3>
        <Link to="/ksiazki">Książki</Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
