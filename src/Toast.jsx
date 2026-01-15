import { useContext } from "react"
import { DataContext } from "./ParentComponent";

export default function Toast() {
    const data = useContext(DataContext);


     return (
    <>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h1 className="text-4xl">{data?.message}</h1>
        </div>
    </>
     )  
}     




