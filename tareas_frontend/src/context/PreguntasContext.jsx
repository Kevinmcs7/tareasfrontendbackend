import { createContext, useContext, useState } from "react";
import {
  createPreguntaRequest,
  getPreguntasRequest,
  deletePreguntaRequest,
  getPreguntaRequest, 
  updatePreguntaRequest
} from "../api/Preguntas";

const PreguntaContext = createContext();

export const usePreguntas = () => {
  const context = useContext(PreguntaContext);

  if (!context) {
    throw new Error("usePreguntas must be used within a TaskProvider");
  }
  return context;
};

export function PreguntaProvider({ children }) {
  const [preguntas, setPreguntas] = useState([]);

  const getPreguntas = async () => {
    try {
      const res = await getPreguntasRequest();
      setPreguntas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPregunta = async (pregunta) => {
    const res = await createPreguntaRequest(pregunta);
    console.log(res);
  };

  const deletePregunta = async (id) => {
    try {
      const res = await deletePreguntaRequest(id);
      if (res.status === 204)
        setPreguntas(preguntas.filter((pregunta) => pregunta._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const getPregunta = async (id) => {
    try {
      const res = await getPreguntaRequest(id)
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  const updatePregunta = async (id, pregunta) => {
    try {
      await updatePreguntaRequest(id, pregunta)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PreguntaContext.Provider
      value={{
        preguntas,
        createPregunta,
        getPreguntas,
        deletePregunta,
        getPregunta,
        updatePregunta,
      }}
    >
      {children}
    </PreguntaContext.Provider>
  );
}
