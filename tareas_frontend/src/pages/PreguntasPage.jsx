import { useEffect } from "react";
import { usePreguntas } from "../context/PreguntasContext";
import PreguntasCard from "../components/PreguntasCard";

function PreguntasPage() {
  const { getPreguntas, preguntas } = usePreguntas();

  useEffect(() => {
    getPreguntas();
  }, []);

  if (preguntas.length === 0) return <h1>No hay Tareas</h1>;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {preguntas.map((pregunta) => (
        <PreguntasCard pregunta={pregunta} key={pregunta._id} />
      ))}
    </div>
  );
}

export default PreguntasPage;
