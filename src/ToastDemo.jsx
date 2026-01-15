import { useEffect, useRef, useState } from "react";
import Toast from "./Toast";

export default function ClickCounter() {
    const [inputValue, setInputValue] = useState("");
    const previousValues = useRef("");

    useEffect(() => {
      previousValues.current = inputValue;
    }, [inputValue]);

    return (
      <div>
        <input type="text" 
        value={inputValue}
         onChange={(e) => setInputValue(e.target.value)
         }/>
         <h2>Previous Value: {previousValues.current}</h2>
         <h2>Current Value: {inputValue}</h2>
      </div>
    )

}
