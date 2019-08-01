import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="10">
    <SEO title="Wprowadzenie" />
    <h1>Mutacje</h1>
    <p>GraphQL skupia się głównie na pobieraniu danych, ale bez problemu możemy za pomocą GraphQL także zmieniać dane w bazie</p>
    <Image src="mutations.png" />
  </Layout>
)

export default Page
