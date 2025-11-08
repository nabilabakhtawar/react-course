import './App.css';

import Hello from "./Hello"
import myimage from "./assets/react.png"

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
   <Hello/>
   
      <img src={myimage} width="50px"/>
    </div>
  );
}

export default App;
