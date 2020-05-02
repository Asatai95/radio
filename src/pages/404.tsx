import SEO from "../components/seo"
import React from 'react'
import { Layout } from '../components/templates/layout'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>Nothing Here</h2>
    <p>Check that you followed the correct address.</p>
  </Layout>
)

export default NotFoundPage
