import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout title="3">
    <SEO title="Wprowadzenie" />
    <h1>Podział GraphQL</h1>
    <h2>Queries</h2>
    <p>W przeciwieństwie do REST, nie łączymy się z konkretnymi endpointami, tylko tworzymy zapytania o strukturze podobnej do obiektu JSON, w odpowiedzi otrzymujemy konkretny zestaw danych o takiej samej strukturze jak nasze zapytanie</p>
    <h2>Resolvers</h2>
    <p>Wskazują, skąd GraphQl ma pobrać dane do konkretnego zapytania</p>
    <h2>Schema</h2>
    <p>Schema opisuje strukturę i typy danych w API, a także tworzy z niej dokumentacje API</p>
    <a style={{ marginTop: '2em', display: 'block' }} href="https://lucasconstantino.github.io/graphiql-online/" target="_blank">GraphiQL Online</a>
  </Layout>
)

export default Page
