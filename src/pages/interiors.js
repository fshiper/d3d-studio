import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Image from "../components/image"

const InteriorsPage = ({ data }) => {
  const images = data.allFile.nodes.map(node => (
    <Image key={node.id} image={node.childImageSharp.fluid} title={node.name} />
  ))
  return (
    <Layout>
      <SEO title="Interiors" />
      <h2>Interiors</h2>
      <div className="container mt-4 flex flex-wrap justify-around ">
        {images}
      </div>
    </Layout>
  )
}
export const data = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "interiors" } }) {
      nodes {
        id
        name
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default InteriorsPage
