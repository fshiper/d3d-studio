import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ReactPannellum from "react-pannellum"
import pano from "../images/panoramas/panorama.jpg"

const PanoramasPage = () => {
  const config = {
    autoRotate: -2,
  }
  const panoStyle = {
    width: "900px",
    height: "600px",
    margin: "auto",
  }

  return (
    <Layout>
      <SEO title="Panoramas 360°" />
      <h2>360°</h2>
      <div>
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          imageSource={pano}
          config={config}
          style={panoStyle}
        />
      </div>
    </Layout>
  )
}

export default PanoramasPage
