import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Image from "../components/image"

const InteriorsPage = ({ data }) => {
  const images = data.allFile.nodes.map(node => (
    <Link key={node.id} to={`/projects/interiors/${node.name}`}>
      <Image
        key={node.id}
        image={node.childImageSharp.fluid}
        title={node.name}
      />
    </Link>
  ))
  return (
    <Layout>
      <SEO title="Wnętrza" />
      <h2>Wnętrza</h2>
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 row-auto mt-4">
        {images}
      </div>
    </Layout>
  )
}
export const data = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "images/interiors" } }) {
      nodes {
        id
        name
        publicURL
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      totalCount
    }
  }
`
export default InteriorsPage
