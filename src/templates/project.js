import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import { Carousel } from "react-responsive-carousel"

export default ({ data }) => {
  const project = data.markdownRemark
  const images = data.allFile.nodes.map(node => (
    <img key={node.id} alt={node.name} src={node.childImageSharp.fluid.src} />
  ))
  return (
    <Layout>
      <SEO title={project.frontmatter.title} description={project.excerpt} />
      <div className="w-11/12 mx-auto">
        <article className="border-b-1 border-gray-500 mb-4">
          <h2>
            {/* Realizacja dla{" "} */}
            <span className="italic font-medium">
              {project.frontmatter.client}
            </span>
          </h2>
          <div
            className="text-sm italic"
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
        </article>
        <Carousel
          showIndicators={false}
          infiniteLoop
          useKeyboardArrows
          emulateTouch
        >
          {images}
        </Carousel>
      </div>
      {/* <article>
        <h3>
          {project.frontmatter.title}
          <span className="text-md italic float-right">
            {project.frontmatter.date}
          </span>
        </h3>
        <div
          className="pt-2"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </article> */}
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
      sort: { fields: name, order: ASC }
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
        client
      }
    }
  }
`
