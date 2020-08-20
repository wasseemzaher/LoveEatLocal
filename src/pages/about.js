import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About({data}) {
  return (
    <div>
      <Layout>
        <Header headerText="this is the about page" />
  <div>this is the page title: {data.site.siteMetadata.title}</div>
      </Layout>
    </div>
  )
}
  export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `
