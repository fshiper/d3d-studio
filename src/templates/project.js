import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Carousel } from "react-responsive-carousel"

export default ({ data }) => {
  const project = data.markdownRemark
  const images = data.allFile.nodes.map(node => (
    <img src={node.childImageSharp.fluid.src} />
  ))

  return (
    <Layout>
      <SEO title={project.frontmatter.title} description={project.excerpt} />
      <div className="w-10/12 mx-auto">
        <Carousel showIndicators={false} emulateTouch>
          {images}
        </Carousel>
        <h3 className="text-lg ">
          <span className="font-medium">{project.frontmatter.title}, </span>
          <span className="italic">{project.frontmatter.date}</span>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
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
          fluid(maxWidth: 1200, maxHeight: 800) {
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
