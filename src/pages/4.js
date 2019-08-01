import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="4">
    <SEO title="Wprowadzenie" />
    <h1>Zapytania</h1>
    <p>Najprościej mówiąc, GraphQL polega na tworzeniu zapytań o konkretne pola na obiektach</p>
    <Image src="query.png" />
  </Layout>
)

export default Page
