import './App.css'

function Button({color}){
  return <span style={{ background: color }}> Gomb </span>

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
