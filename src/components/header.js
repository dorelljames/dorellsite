import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="mb-6">
    <div className="mx-auto container p-8 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="m-0 pt-4">
          <Link to="/" className="no-underline">
            <img src={Logo} alt="Dorell Logo" />
          </Link>
        </h1>
        <ul className="list-reset flex ml-5">
          <li>
            <Link className="p-4 text-lg" to="/">
              All projects.
            </Link>
          </li>
          <li>
            <Link className="p-4 text-lg" to="/about">
              About me.
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="list-reset flex">
          <li className="mx-3">
            <a
              className="p-2 text-lg"
              href="//twitter.com/dorelljames"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tw
            </a>
          </li>
          <li className="mx-3">
            <a
              className="p-2 text-lg"
              href="//github.com/dorelljames"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gh
            </a>
          </li>
        </ul>
      </div>
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
