import React from "react"
import { Card } from "react-bootstrap"

const Yuz = (props) => {
  return (
    <Card.Text>
      {props.yuz} km<sup>2</sup>
    </Card.Text>
  )
}

export default Yuz
