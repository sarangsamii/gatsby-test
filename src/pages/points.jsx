import { Link } from "gatsby"
import React from "react"
import { CustomButton } from "../components/CustomButton"
import Layout from '../Layout';


export default function Points() {
  return (
    <Layout>
      <Link to="/nested/contact">Contact</Link>
      <br/>
      <a href="https://www.gatsbyjs.com/">Global Non Gatsby Link</a>
      <CustomButton>Test Button</CustomButton>
    </Layout>
  )
}
