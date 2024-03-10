import "./app.scss"

const App = () => {

  const Button = {
    width: "30px",
    height: "30px",
    background: "green"
  }

  return (
    <div style={{color:"red", backgroundColor:"blue"}}>
      <div className="box"> 
      <p>Text</p>
      <button style={Button}>Button</button>
      </div>
    </div>
  )
}

export default App
