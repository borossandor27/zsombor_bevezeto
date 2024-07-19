import './App.css'
import { useState } from 'react'

function Button( {color} ) {
    const [counter, setcounter] = useState(0);
  return <span
    style={{ background: color }}
    onClick={() => setcounter(counter + 1)}
  > Gomb: {counter}
  </span>

}
function App() {

  return (
    <>
      <header className="App-header">
        <Button color="red" />
        <p>
          asssghaagfgagx
        </p>
        <Button color="blue" />
      </header>
    </>
  )
}

export default App
