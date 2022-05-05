import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Link to="/nested/contact">Contact</Link>
      <br/>
      <a href="https://www.gatsbyjs.com/">Global Non Gatsby Link</a>
    </Layout>
  )
}
