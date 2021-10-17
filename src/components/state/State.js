import React, { useState } from "react"
import { Button } from "react-bootstrap"

const State = () => {
  const [sayac, setSayac] = useState(0)
  const artir = () => {
    setSayac(sayac + 1)
  }
  const azalt = () => {
    if (sayac > 0) {
      setSayac(sayac - 1)
    }
  }
  const sifirla = () => {
    setSayac(0)
  }

  return (
    <div>
      <h1>Sayaç değeri: {sayac}</h1>
      <Button variant="info" onClick={artir}>
        Artır
      </Button>
      <Button variant="success" onClick={azalt}>
        Azalt
      </Button>
      <Button variant="warning" onClick={sifirla}>
        Sıfırla
      </Button>
    </div>
  )
}

export default State
