import React from "react"
import Header from "../components/header"

export default function PageBody({ children }) {
  return (
    <div style={{margin: `3rem auto`, maxWidth: 850, padding: `0 1rem` }}>
      <Header headerText="This is the Page Body" />
      {children}
    </div>
  )
}
