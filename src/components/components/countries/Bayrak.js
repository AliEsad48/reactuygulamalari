import React from "react"
import { Card } from "react-bootstrap"

const Bayrak = (props) => {
  return (
    <Card.Img
      variant="top"
      src={`${props.image}`}
      style={{ width: "50px", height: "50px" }}
      className=""
    />
  )
}

export default Bayrak
