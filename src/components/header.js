import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import ListLink from "./listLink"

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className="bg-gray-900 shadow-lg pt-6 pb-2">
      <nav className="flex items-center justify-between flex-wrap container mx-auto w-5/6">
        <div className="flex items-center flex-shrink-0 text-gray-100 mr-6">
          <Link to="/" href="#responsive-header">
            <span className="font-semibold text-2xl tracking-tight">
              {siteTitle}
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-gray-100 bg-gray-900 hover:text-gray-100 hover:border-gray-100"
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
          <div className="lg:flex lg:text-lg lg:flex-grow justify-end">
            <ListLink to="/showcase/">Showcase</ListLink>
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
