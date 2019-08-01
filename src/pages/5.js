import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="5">
    <SEO title="Wprowadzenie" />
    <h1>Argumenty</h1>
    <p>W zapytaniach możemy wykorzystywać argumenty</p>
    <Image src="arguments.png" />
  </Layout>
)

export default Page
