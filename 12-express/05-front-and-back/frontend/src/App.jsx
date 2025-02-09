import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPerson(data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      {person && (
        <>
          <h1>{person.id}</h1>
          <h2>{person.text}</h2>
        </>
      )}
    </>
  )
}

export default App
