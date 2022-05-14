import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my awesome blog!.</p>
      <StaticImage
        alt="A binary background"
        src="../images/binary.jpg"
      />
    </Layout>
  )
}

export default IndexPage