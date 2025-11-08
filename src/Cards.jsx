import myimage from "./assets/react.jpeg"
import "./App.css"

function Cards (){
    const name="Nabila Bakhtawar";
    const descr="I'm a passinote web developer and im learning react " 
    return(
<div className="Cards">
    <img src={myimage} alt="img" width="70px" />
    <h2>Hello from {name}</h2>
    <p> My description:{descr}</p>
</div>
    );
}
export default Cards;