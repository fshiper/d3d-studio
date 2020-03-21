import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      className="w-20 h-20 absolute top-0 right-0"
      fluid={data.logoImage.childImageSharp.fluid}
    />
  )
}
export default Logo
