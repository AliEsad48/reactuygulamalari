import React, { useState, useEffect } from "react"

const ChangeTitle = () => {
  const [sayac, setSayac] = useState(1)
  const artir = () => {
    setSayac(sayac + 1)
  }

  useEffect(() => {
    document.title = `${sayac} kere tıklandı`
  }, [sayac])

  return (
    <div>
      <h2>{sayac} kere tıklandı</h2>
      <button onClick={artir}>TIKLA</button>
    </div>
  )
}

export default ChangeTitle
