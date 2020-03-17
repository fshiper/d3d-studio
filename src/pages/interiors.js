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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 row-auto mt-4">
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
