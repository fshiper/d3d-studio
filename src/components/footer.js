import React from "react"

const Footer = () => (
  <footer className="container text-center border-t border-gray-700 mx-auto mt-6 p-4">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
