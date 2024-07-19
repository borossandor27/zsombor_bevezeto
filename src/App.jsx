import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Button({ color }) {
  const [counter, setCounter] = useState(0);
  return (
    <span
      style={{ background: color }}
      onClick={() => setCounter(counter + 1)}
    >
      Gomb: {counter}
    </span>
  );
}

function App() {
  const [torpek, setTorpek] = useState(['Tudor', 'Vidor', 'Szende', 'Hapci', 'Kuka']);
  const [ujTorpe, setUjTorpe] = useState(''); // Állapot alapértelmezett értéke üres string

  const addTorpe = () => {
    if (ujTorpe.trim()) { // Ellenőrizzük, hogy az új törpe neve nem üres
      setTorpek([...torpek, ujTorpe]);
      setUjTorpe(''); // Töröljük az input mezőt
    }
  };

  return (
    <>
      <div>
        {torpek.map((torpe, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '5px', margin: '5px' }}>
            {torpe}
          </div>
        ))}
        <input
          type="text"
          value={ujTorpe}
          onChange={e => setUjTorpe(e.target.value)}
        />
        <button onClick={addTorpe}>Add Torpe ({ujTorpe.length})</button>
      </div>
    </>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
};

export default App;
