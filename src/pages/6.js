import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="6">
    <SEO title="Wprowadzenie" />
    <h1>Aliasy</h1>
    <p>Zapytania możemy przypisywać do różnych nazw</p>
    <Image src="aliases.png" />
  </Layout>
)

export default Page
