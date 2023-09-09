import Functioncompo from "./components/Functioncompo"



import "./App.css"
import { useState } from "react";
import ClassCompo from "./components/Classcompo";
function App() {

  const [fState,setFState]=useState(false);
  const [cState,setCState]=useState(false);
    return (
    <div className="parent">
        <h1 className="head-top"> Styling  using  Functional or Class Component   </h1>
        <div className="functionClassButton">
        <button className="functionButton" onClick={()=> setFState(!fState)}> To see styling in functional component </button>
        <button className="classButton"  onClick={()=> setCState(!cState)}>To see styling in class component </button>
        </div>
       <div className="bothComponent">
        {fState? <Functioncompo/> : ""}
     {cState ?   <ClassCompo/> : ""}
      
       </div>
       
    </div>
    );
  }
  
  export default App;
  