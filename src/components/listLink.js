import React from "react"
import { Link } from "gatsby"

const ListLink = props => {
  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: "text-teal-500" } : {}
  }
  return (
    <li className="block mt-4 font-medium lg:inline-block lg:mt-0 text-gray-700 transition duration-500 ease-in-out hover:text-teal-500 mr-6">
      <Link to={props.to} getProps={isPartiallyActive}>
        {props.children}
      </Link>
    </li>
  )
}
export default ListLink
