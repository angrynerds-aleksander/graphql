import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout title="9">
    <SEO title="Wprowadzenie" />
    <h1>Mutacje</h1>
    <p>GraphQL skupia się głównie na pobieraniu danych, ale bez problemu możemy za pomocą GraphQL także zmieniać dane w bazie</p>
  </Layout>
)

export default SecondPage
