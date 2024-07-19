import './App.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  color: PropTypes.string.isRequired
}
export default App
