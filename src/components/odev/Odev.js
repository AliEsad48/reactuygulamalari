import React, { useState } from "react"
import { ProgressBar, Button, ButtonGroup } from "react-bootstrap"

const Odev = () => {
  const [count, setCount] = useState(10)

  const artir = () => {
    if (count < 100) {
      setCount(count + 10)
    }
  }
  const azalt = () => {
    if (count > 0) {
      setCount(count - 10)
    }
  }
  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button variant="warning" onClick={artir}>
          +
        </Button>
        <Button variant="secondary" disabled>
          {count}
        </Button>
        <Button variant="success" onClick={azalt}>
          -
        </Button>
      </ButtonGroup>
      <br />
      <div></div>
      <ProgressBar
        className="mt-2"
        striped
        variant="danger"
        animated
        now={count}
        label={`${count}%`}
      />
    </>
  )
}

export default Odev
