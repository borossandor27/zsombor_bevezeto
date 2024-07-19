import './App.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Button({ color }) {
  const [counter, setcounter] = useState(0);
  return <span
    style={{ background: color }}
    onClick={() => setcounter(counter + 1)}
  > Gomb: {counter}
  </span>

}
function App() {
  const [torpek, setTorpek] = useState([
    'Tudor',
    'Vidor',
    'Szende',
    'Hapci',
    'Kuka']);
  return (
    <>
      <div>
        {torpek.map(
          (torpe, index) => {
            return <div key={index} style={{ border: '1px solid black', padding: '5px', margin: '5px' }}>{torpe}</div>
          }
        )}

      </div>
    </>
  )
}

Button.propTypes = {
  color: PropTypes.string.isRequired
}
export default App
