import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Page = () => (
  <Layout title="7">
    <SEO title="Wprowadzenie" />
    <h1>Fragmenty</h1>
    <p>By nie powielać kodu, możemy tworzyć fragmenty z polami, które możemy użyć w zapytaniach</p>
    <Image src="fragments.png" />
  </Layout>
)

export default Page
