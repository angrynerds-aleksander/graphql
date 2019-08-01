import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout title="2">
    <SEO title="Wprowadzenie" />
      <h1>GraphQL vs REST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
      <div className="grid">
        <p className="step">Jeden endpoint</p>
        <p className="step">Wiele endpointów</p>

        <p className="step">Możliwość tworzenia różnych zapytań, elastyczność doboru danych</p>
        <p className="step">Jedno zapytanie = jeden endpoint, ograniczona swoboda. Skomplikowane operacje wymagają więcej zapytań do API</p>

        <p className="step">Zapytanie zwraca dokładnie takie dane jakie potrzebujemy</p>
        <p className="step">Zapytanie może zwracać zbyt mało lub zbyt dużo danych</p>
      </div>
      <a style={{ marginTop: '2em', display: 'block' }} href="https://www.graphqlbin.com/v2/6RQ6TM" target="_blank">GraphQL Playground</a>
  </Layout>
)

export default Page
