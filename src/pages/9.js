import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="9">
    <SEO title="Wprowadzenie" />
    <h1>Dyrektywy</h1>
    <p>Na podstawie wprowadzonych argumentów, możemy decydować jakie dane pobrać, a jakie nie</p>
    <Image src="directives.png" />
  </Layout>
)

export default Page
