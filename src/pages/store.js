import React from "react"
import Layout from "../components/layout"
import { ProductInput } from "../components/productInput"
import firebase from "../db/firebase"
import AddProduct from "../components/addProduct"

export default function Store() {

  return (
    
    <Layout>
      <AddProduct/>
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allProduct {
//       edges {
//         node {
//           id
//           display
//           name
//           notes
//           price
//           stock
//           tags
//           instructions
//           description
//         }
//       }
//     }
//   }
// `
