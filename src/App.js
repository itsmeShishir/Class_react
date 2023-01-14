import { useState, useEffect } from "react";
import axios from 'axios';
import Note from "./Component/Note";

function App() {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);


  useEffect(() => {
    axios.get('http://localhost:3001/notes')
      .then(res => {
        setNotes(res.data)
      })
      .catch(err => { console.log(err) });
  }, [])
  // Handle form submit.
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const note = {
  //     id: notes.length + 1,
  //     content: newNote,
  //     date: new Date().toISOString(),
  //     important: Math.random() < 0.5,
  //   };
  //   setNotes(notes.concat(note));
  // };

  // Handle change in form input.
  const handleChange = (e) => {
    setNewNote(e.target.value);
    console.log(e.target.value);

  };
  const handleAdd = (event) => {
    event.preventDefault();
    const note = {
      content: newNote,
      date: new Date().toString(),
      important: Math.random() < 0.5,
    }
    if (newNote !== '') {
      axios.post('http://localhost:3001/notes', note)
        .then(res => {
          setNotes(notes.concat(res.data))
          console.log(res)
          setNewNote('')
        }).catch(err => console.log(err))
    }
  }

  const handleDelete = async (id) => {
    alert(id)
    try {
      await axios.delete(`http://localhost:3001/notes/${id}`)
      setNotes(notes.filter(note => note.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const handleUpdate = (id) => {
    const note = notes.find(note => note.id === id)
    const updatedNote = { ...note, important: !note.important }
    alert(updatedNote)
    axios.put(`http://localhost:3001/notes/${id}`, updatedNote)
      .then(res => {
        setNotes(notes.map(note => note.id !== id ? note : res.data))
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <h2>Notes</h2>
      <button
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        Show All?
      </button>
      <ul>
        <hr />
        {notes.map(note =>
          <Note
            key={note.id}
            note={note}
            handleDelete={() => handleDelete(note.id)}
            handleUpdate={() => handleUpdate(note.id)}
          />
        )}
      </ul>
      <form action="" onSubmit={handleAdd}>
        <input type="text" onChange={handleChange} />
        <button>add</button>
      </form>
    </>
  );
}

export default App;
