import React from "react"
import { Link } from "gatsby"
export default function NavigationBar() {
  const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  return (
    <div>
       {/* highlight-start */}
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>love eat local</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact Us</ListLink>
          <ListLink to="/gallery/">Gallery</ListLink>
          <ListLink to="/privateEvents/">Private Events</ListLink>
          <ListLink to="/store/">Store</ListLink>
          <ListLink to="/testimonials/">Testimonials</ListLink>

        </ul>
      </header>
      {/* highlight-end */}
      </div>
  )
}
