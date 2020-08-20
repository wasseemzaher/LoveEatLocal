import React from "react"
import Header from "../components/header.js"
import Layout from "../components/layout" 

export default function Home() {
  return (
    <div>
      <Layout>
        {" "}
        {/* highlight-line */}
        <p>this the Home page</p>
        <Header headerText="this is a header component" />
      </Layout>
    </div>
  )
}
