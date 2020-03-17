import React from "react"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ image, title }) => {
  return (
    <div className="self-center p-0 m-8" style={{ width: 300 }}>
      <Img
        className="shadow-lg backdrop-blur opacity-75 filter-grayscale scale-100 transition duration-500 ease-in-out hover:shadow-sm hover:opacity-100 hover:filter-saturate"
        fluid={image}
        alt={title}
        // className="interior"
      />
    </div>
  )
}

export default Image
