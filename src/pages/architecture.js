import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ReactPannellum, { getConfig } from "react-pannellum"
import pano from "../images/panoramas/panorama.jpg"

const ArchitecturePage = () => {
  const click = () => {
    console.log(getConfig())
  }
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
      <SEO title="Architecture" />
      <h2>Architecture</h2>
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

export default ArchitecturePage
