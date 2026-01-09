import { useState , useEffect} from "react";
import Calculator from "./Calculator";
import ParentComponent from "./ParentComponent";
function App() {
    const [time , settime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            settime(new Date())
        } , 1000);
        return () => clearInterval(timer);
    } , []);
   function formattime (time) {
    return time.toString().padStart(2 , '0');
   }
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
return (
    <>
    <div  className = "border-3 text-center w-150 mx-auto rounded-2xl  min-h-100 mt-20  border-black items-center justify-center flex flex-col">
    <h1 className="font-bold text-4xl my-7">REAL CLOCK</h1>
    <div className="flex flex-col">
    <h1 className="font-bold text-4xl my-7">{`${formattime(hours)}:${formattime(minutes)}:${formattime(seconds)}${ampm}`}</h1>
  <h2 className="font-bold text-4xl my-7">{time.toDateString()}</h2>
    </div>
    </div>

    <Calculator></Calculator>
    <ParentComponent></ParentComponent>
    </>
)
}
export default App;




 