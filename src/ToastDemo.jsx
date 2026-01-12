import { useState } from "react";
import Toast from "./Toast";
export default function ClickCounter() {
const [showToast , setShowToast] = useState(false);

return (
  <div className="flex flex-col items-center justify-center h-screen">
    <button onClick={() => setShowToast(true)} className="bg-red-700 p-5 text-4xl border-2 border-black text-white rounded-2xl">Show Toast</button>
    {showToast && <Toast message="This is a toast message!" onClose={() => setShowToast(false)} />}
  </div>
)
}
