import React from "react"
import Layout from "../components/layout"
import { ProductInput } from "../components/productInput"
import firebase from "../db/firebase"

export default function AddProduct() {
  const [products, setProducts] = React.useState([])
  const [newProductName, setNewProductName] = React.useState()
  const [newProductMedia, setNewProductMedia] = React.useState()
  const [newProductPrice, setNewProductPrice] = React.useState()
  const [newProductStock, setNewProductStock] = React.useState()
  const [newProductNotes, setNewPoductNotes] = React.useState()
  const [newProductDescription, setNewProductDescription] = React.useState()
  const [newProductDisplay, setNewProductDisplay] = React.useState()
  const [newProductInstructions, setNewProductinstructions] = React.useState()
  const [newProductTags, setNewProductTags] = React.useState()

  React.useEffect(() => {
    const db = firebase.firestore()

    // Here is how you subscribe to the data to update any changes in values in realtime.
    const unsubscribe = db.collection("products").onSnapshot(snapshot => {
      const productsData = []
      snapshot.forEach(doc => productsData.push({ ...doc.data(), id: doc.id }))
      setProducts(productsData)
    })
    return unsubscribe
  }, [])

  const onAdd = () => {
    const db = firebase.firestore()
    db.collection("products").add({ name: newProductName })
  }

  return (
    <Layout>
      <ul>
        <input
          value={newProductName}
          onChange={e => setNewProductName(e.target.value)}
        />
        <button onClick={onAdd}>Add</button>

        {products.map(product => (
          <li key={product.name}>
            <ProductInput product={product} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}
