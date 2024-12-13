import axios from "./axios";

export const getPreguntasRequest = () => axios.get("/tareas");

export const getPreguntaRequest = (id) => axios.get(`/tareas/${id}`);

export const createPreguntaRequest = (pregunta) => axios.post("/tareas", pregunta);

export const updatePreguntaRequest = (id, pregunta) => 
    axios.put(`/tareas/${id}`, pregunta);

export const deletePreguntaRequest = (id) => axios.delete(`/tareas/${id}`);





