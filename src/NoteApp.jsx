
import React , { useRef , useEffect , useState }  from "react";

export default function NoteApp () {
const[title , setTitle] = useState(() => {
   const savedTitle = localStorage.getItem('currentTitle');
   return savedTitle ? savedTitle : '';
});
const[note , setNote] = useState(() => {
   const savedNote = localStorage.getItem('currentNote');
   return savedNote ? savedNote : '';
});
const [noteArr , setNoteArr ] = useState(() => {
   const savedNotes = localStorage.getItem('notearr');
   return savedNotes ? JSON.parse(savedNotes) : [];
});
const [editingIndex, setEditingIndex] = useState(null);

const titleRef = useRef();
const noteRef = useRef();
useEffect(() => {
    titleRef.current.focus();
} , [])

useEffect(() => {
  localStorage.setItem("notearr", JSON.stringify(noteArr));
}, [noteArr]);

useEffect(() => {
   localStorage.setItem("currentTitle", title);
   localStorage.setItem("currentNote", note);
}, [note , title])

const addNewNote = () => {
   if (!title.trim() || !note.trim()) return;
   
   if (editingIndex !== null) {
      // Update existing note
      const updatedNotes = [...noteArr];
      updatedNotes[editingIndex] = {
         ...updatedNotes[editingIndex],
         title: title,
         note: note
      };
      setNoteArr(updatedNotes);
      setEditingIndex(null);
      alert('Note updated successfully');
   } else {
      // Add new note
      const newNote = {
         title: title,
         note: note,
         createdAt: Date.now()
      }
      setNoteArr(prev => [...prev , newNote])
   }
   setTitle("")
   setNote("")
}

const viewNote = (e) => {
  const noteIndex = parseInt(e.target.getAttribute("data-index"));
  const noteToView = noteArr[noteIndex];
   setTitle(noteToView.title);
   setNote(noteToView.note);
   noteRef.current.readOnly = true;
   titleRef.current.readOnly = true;
   alert('you are in view mode . view in the input fields')
}

const editNote = (e) => {
   const noteIndex = parseInt(e.target.getAttribute("note-index"));
   const noteToEdit = noteArr[noteIndex];
   setEditingIndex(noteIndex);
   setTitle(noteToEdit.title);
   setNote(noteToEdit.note);
   noteRef.current.readOnly = false;
   titleRef.current.readOnly = false;
}

const setNewNote = () => {
   setTitle("");
   setNote("");
   setEditingIndex(null);
   noteRef.current.readOnly = false;
   titleRef.current.readOnly = false;
}

const deleteNote = (e) => {
   const noteIndex = parseInt(e.target.getAttribute("note-index"));
   const updatedNotes = [...noteArr];
   updatedNotes.splice(noteIndex, 1);
   setNoteArr(updatedNotes);
}
return (
        <React.Fragment>
          <header className="bg-white z-100 left-0 right-0 top-0 fixed flex justify-between  py-5 px-3 ">
       <h1 className="text-4xl font-bold">📝 Note App</h1>
       <h1 className="text-4xl font-bold"> ✍️ Your Note</h1>
          </header>
           <main className="flex justify-center left-0 right-0 bottom-0 top-20">
          <div className=" left-10 bottom-0 fixed top-20 py-3 border-2 border-black   flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">New Note ✍️</h1>
           <input value={title} onChange={(e) => setTitle(e.target.value)} className=" text-center justify-center  mt-4 font-bold text-2xl px-23  py-3 mx-auto focus:border-none focus:outline-none" ref={titleRef} type="text"  placeholder="enter the title ..."/>
           <textarea value={note} onChange={(e) => setNote(e.target.value)} className="  text-xl p-3 focus:border-none focus:outline-none" placeholder="write note...." ref={noteRef} rows={'10'} cols={'50'}/>
            <button className="font-bold text-2xl bg-black text-white hover:cursor-pointer hover:opacity-50  p-2 left-0 bottom-0 absolute" onClick={setNewNote} >+</button>
            <button className="bg-black text-white hover:cursor-pointer hover:opacity-50  p-2 right-0 bottom-0 absolute" onClick={addNewNote}>{editingIndex !== null ? "Update" : "Save"}</button>
        </div>
       
        <div className=" top-10 right-0 absolute   text-black flex flex-col justify-center items-center px-10">
           <ul className="mt-10">
              {
               noteArr.map((n , i) => {
                  if (n.title && n.note) {
                  return <React.Fragment>
                    <li  key={i}>
                     <div className=" mb-3 flex justify-between items-center text-xl gap-20">
                     <h1 className="font-bold border-2 rounded-full border-black p-2" >{i + 1}</h1>
                       <div className="flex flex-col gap-2 items-center justify-center mr-20">
                        <article className="mx-auto text-[2rem] font-bold hover:cursor-pointer hover:opacity-50" onClick={viewNote} data-index={i}>{n.title.length >= 7 ? `${n.title.slice(0 , 6).trim()}...` : n.title.trim()}</article>
                        <h1>{new Date(n.createdAt).toLocaleDateString()} {new Date(n.createdAt).toLocaleTimeString()}</h1>
                       </div>
                       <div className="flex gap-3">
                        <button className="bg-black text-white p-2 rounded-xl hover:opacity-50" onClick={editNote} note-index={i}>🖋️ Edit</button>
                        <button className="bg-white  text-black border-2 border-black p-2 rounded-xl hover:opacity-50" onClick={deleteNote} note-index={i}> ❌ Delete</button>
                       </div>
                     </div>
                     <hr />
                  </li>
                     </React.Fragment>
                  }
                  else {
                     return null
                  }
               })
              }
           </ul>
        </div>
           </main>
        </React.Fragment>
      ) 
}
    