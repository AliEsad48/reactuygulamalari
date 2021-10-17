import React from "react"
import { Card } from "react-bootstrap"

const Person = (props) => {
  const { image, name, nufus, baskent } = props
  return (
    <Card>
      <Card.Body className="d-flex">
        <Card.Img
          variant="top"
          src={`${image}`}
          style={{ width: "100px", height: "100px" }}
          className=""
        />
        <div className="ms-3">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{nufus}</Card.Text>
          <Card.Text>{baskent}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Person
