import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

export default ({ data }) => {
  const post = data.markdownRemark
  const images = data.allFile.nodes.map(node => (
    <Image key={node.id} image={node.childImageSharp.fluid} title={node.name} />
  ))
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 row-auto mt-4">
          {images}
        </div>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $imagePath: String!) {
    allFile(
      filter: {
        relativeDirectory: { eq: $imagePath }
        childImageSharp: { internal: { type: { eq: "ImageSharp" } } }
      }
    ) {
      nodes {
        id
        name
        publicURL
        childImageSharp {
          fluid(toFormat: WEBP, maxWidth: 500, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
