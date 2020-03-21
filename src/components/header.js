import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import ListLink from "./listLink"
import Logo from "./logo"

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className="bg-gradient-gray-light shadow-md pt-4 pb-2 mb-8">
      <nav className="flex container w-11/12 items-center justify-between flex-wrap  mx-auto">
        <div className="flex items-center flex-shrink-0 text-gray-700 mr-6">
          <Link to="/" href="#responsive-header">
            {/* <Logo className="w-20 h-20 inline-block" /> */}
            <span className="font-semibold text-xl tracking-tight">
              {siteTitle}
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border border-gray-700 rounded text-gray-700 bg-gray-200 transition duration-500 ease-in-out hover:text-gray-400 hover:border-gray-400"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="lg:flex lg:text-md lg:flex-grow justify-end">
            <ListLink to="/interiors/">Interiors</ListLink>
            <ListLink to="/architecture/">Architecture</ListLink>
            <ListLink to="/panoramas/">360°</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
