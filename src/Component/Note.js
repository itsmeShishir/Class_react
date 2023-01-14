import React from 'react'

function Note(props) {
    const { note, handleDelete, handleUpdate } = props
    return (
        <li>
            <strong>{note.content}</strong>
            <p>{note.date}</p>
            <button
                onClick={() => {
                    handleDelete(note.id)
                }}
            >Delete</button>
            <button
                onClick={handleUpdate}
            >{note.important ? 'set important' : 'set not importatn'}</button>
            <hr />
        </li>
    );
}

export default Note