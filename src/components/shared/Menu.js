import React from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
const Menu = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Link to="/">Homepage</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/birthday">Birthday</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/bs-classic">Bootstrap Classic</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/bs-react">Bootstrap React</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/clock-1">Clock1</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="/clock-2">Clock2</Link>
      </ListGroup.Item>
    </ListGroup>
  )
}
export default Menu
