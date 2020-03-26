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
    width: "100%",
    height: "100%",
    margin: "auto",
  }

  return (
    <Layout>
      <SEO title="Panoramy 360°" />
      <h2>Panoramy 360°</h2>
      <div className="h-sm md:h-md lg:h-lg xl:h-xl w-11/12 mx-auto">
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
