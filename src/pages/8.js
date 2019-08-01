import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="8">
    <SEO title="Wprowadzenie" />
    <h1>Zmienne</h1>
    <p>Oczywiście w zapytaniach możemy używać zmiennych</p>
    <Image src="variables.png" />
  </Layout>
)

export default Page
