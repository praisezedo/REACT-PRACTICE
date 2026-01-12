
import { useState , useEffect } from "react";

function ClickCounter() {
const [x , setX] = useState(0);
const [y , setY] = useState(0);
const [display , setDisplay] = useState(false);

const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
    console.log("Mouse Event");
}   
useEffect(() => {
    console.log("Adding Event Listener");
    window.addEventListener('mousemove' , logMousePosition);

    return () => {
        console.log("Removing Event Listener");

        window.removeEventListener('mousemove' , logMousePosition);
    }
} , []);

  return (
     <>
  <button className="" onClick={() => setDisplay(!display)}>display Mouse event</button>
  {
    display &&  <div> 
        <h1 className="text-4xl font-bold text-center my-10">Mouse Position: x - {x}, y - {y}</h1>
    </div>
  }</>
  );
}

export default ClickCounter;