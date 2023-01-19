import axios from "axios";
const baseUrl = 'http://localhost:3001/notes';

const getAllNotes = () => {
    return axios.get(baseUrl)
}
const createNote = (Newnote) => {
    return axios.post(baseUrl, Newnote)
}
const deleteNote = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}
const changeImportance = (id, changedNote) => {
    return axios.put(`${baseUrl}/${id}`, changedNote)
}

const fun = {
    getAllNotes,
    createNote,
    deleteNote,
    changeImportance
}
export default fun;