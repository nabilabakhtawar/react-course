
function Hello() {

  const headingStyling={
    color:"red",
    textAlign:"center",
    backgroundColor:"black",

  }
  return(

 
  <>
   <h1 style={headingStyling}>Hello component</h1>;
   <h1 style={{ color:"blue", textAlign:"center", backgroundColor:"black",}}> inline styling</h1>
  </>
    );
}

export default Hello;
