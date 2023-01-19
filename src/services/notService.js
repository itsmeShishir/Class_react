import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'
const getAllNotes = () => {
    return axios.get(baseUrl)
}
const createNote = (newNote) => {
    return axios.post(baseUrl, newNote)
}
const deleteNote = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
const changeImportance = (id, changedNote) => {
    return axios.put(`${baseUrl}/{id}`, changedNote)
}

export default {
    getAllNotes,
    createNote,
    deleteNote,
    changeImportance
}