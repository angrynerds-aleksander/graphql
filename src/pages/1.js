import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout title="GraphQl - Wprowadzenie">
    <SEO title="Wprowadzenie" />
    <h1>Czym jest GraphQL?</h1>
    <p>Jest to język zapytań API, który powstał jako alternatywa dla architektury REST</p>
    <p>To co wyróżnia GraphQL na tle REST API, to większa elastyczność zapytań i dokładność zwracanych danych</p>
  </Layout>
)

export default IndexPage
