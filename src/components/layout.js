import React from "react"
// highlight-start
import NavigationBar from "../layout/navigationBar"
import PageBody from "../layout/body"
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
      <NavigationBar />
      <PageBody>{children}</PageBody>
    </div>
  )
}
