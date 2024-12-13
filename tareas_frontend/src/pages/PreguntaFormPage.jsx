import { useForm } from "react-hook-form";
import { usePreguntas } from "../context/PreguntasContext";
import { data, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function PreguntaFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { createPregunta, getPregunta, updatePregunta } = usePreguntas();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadPregunta() {
      if (params.id) {
        const pregunta = await getPregunta(params.id);
        console.log(pregunta);
        setValue("title", pregunta.title);
        setValue("pregunta", pregunta.pregunta);
        setValue("date", dayjs(pregunta.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadPregunta();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    console.log(dataValid);

    if (params.id) {
      updatePregunta(params.id, dataValid);
    } else {
      createPregunta(dataValid);
    }
    navigate("/preguntas");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            placeholder="Titulo"
            {...register("title", { required: "El título es obligatorio" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}

          <label htmlFor="pregunta">Tarea</label>
          <textarea
            rows="3"
            placeholder="Tarea"
            {...register("pregunta", { required: "La Tarea es obligatoria" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          {errors.pregunta && (
            <p className="text-red-500 text-sm">{errors.pregunta.message}</p>
          )}

          <label htmlFor="date">Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <button className="bg-indigo-500 px-3 py-2 rounded-md">Save</button>
        </form>
      </div>
    </div>
  );
}

export default PreguntaFormPage;
