import { usePreguntas } from "../context/PreguntasContext";
import { Link } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc)


function PreguntasCard({ pregunta }) {
  const { deletePregunta } = usePreguntas();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md border border-white">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{pregunta.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
          className="bg-red-500 hover: bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
                deletePregunta(pregunta._id);
            }}
          >
            delete
          </button>
          <Link to={`/preguntas/${pregunta._id}`}
          className="bg-blue-500 hover: bg-blue-600 text-white px-4 py-2 rounded-md"

          >edit</Link>
        </div>
      </header>
      <p className="text-slate-300"> Tarea: {pregunta.pregunta}</p>
      <p>
        Fecha de Entrega: {days(pregunta.date).utc().format("DD/MM/YYYY")}
      </p>
    </div>
  );
}

export default PreguntasCard;
