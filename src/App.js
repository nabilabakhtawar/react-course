//import './App.css'
//import Cards from './components/Cards'
//import Hello from "./components/Hello"
import UserCard from "./components/UserCard"
function App() {

  
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
      }}>
      
  <UserCard name="Nabila Bakhtawar" age={21} description="i'm a web engginer"/>
   <UserCard name="Seema Bano" age={22} description="i'm a Fluter developer"/>
    <UserCard name="Aliya Ahmed" age={20} description="i'm a Graphic designer"/>
   
    </div>
  );
}

export default App;
