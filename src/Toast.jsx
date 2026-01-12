
export default function Toast ({message, onClose}) {
     return (
        <div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h1 className="text-4xl">{message}</h1>
            <button onClick={onClose} className="mt-2 bg-red-700 px-3 py-1 rounded">Close</button>
        </div>
        </div>
     )  
}



