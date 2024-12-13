import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Datos por usuario
const userTaskData = [
  { user: "Usuario 1", created: 12, failed: 0, edited: 12, deleted: 12 },
  { user: "Usuario 2", created: 14, failed: 1, edited: 13, deleted: 13 },
  { user: "Usuario 3", created: 10, failed: 0, edited: 10, deleted: 10 },
  { user: "Usuario 4", created: 11, failed: 0, edited: 11, deleted: 11 },
  { user: "Usuario 5", created: 15, failed: 0, edited: 15, deleted: 15 },
  { user: "Usuario 6", created: 13, failed: 0, edited: 13, deleted: 13 },
];

// Datos de resumen general
const testResults = [
  {
    title: "Registro de Usuarios",
    number: "10",
    metric: "Registros exitosos",
    details: "0 fallidos debido a campos no válidos.",
  },
  {
    title: "Agregado de Tareas",
    number: "10",
    metric: "Promedio de tareas por usuario",
    details: "Todos los datos fueron almacenados correctamente.",
  },
  {
    title: "Visualización de Tareas",
    number: "100%",
    metric: "Tareas visualizadas correctamente",
    details: "Sin errores en sincronización de datos.",
  },
  {
    title: "Edición y Eliminación de Tareas",
    number: "98%",
    metric: "Funcionalidades ejecutadas, solamente ocurrio 1 fallo al editar",
    details:
      "Algunos casos con ediciones no reflejadas de inmediato por problemas de caché.",
  },
];

// Generar datos de gráfica
const generateBarData = (data) => ({
  labels: ["Creadas", "Fallidas", "Editadas", "Eliminadas"],
  datasets: [
    {
      label: data.user,
      data: [data.created, data.failed, data.edited, data.deleted],
      backgroundColor: ["#3B82F6", "#EF4444", "#10B981", "#F59E0B"],
    },
  ],
});

const generatePieData = (data) => ({
  labels: ["Creadas", "Fallidas", "Editadas", "Eliminadas"],
  datasets: [
    {
      label: data.user,
      data: [data.created, data.failed, data.edited, data.deleted],
      backgroundColor: ["#3B82F6", "#EF4444", "#10B981", "#F59E0B"],
    },
  ],
});

const generateLineData = (data) => ({
  labels: ["Creadas", "Fallidas", "Editadas", "Eliminadas"],
  datasets: [
    {
      label: data.user,
      data: [data.created, data.failed, data.edited, data.deleted],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      fill: true,
    },
  ],
});

const EstadisticasPruebas = () => {
  return (
    <div className="bg-zinc-800 h-screen p-6 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center mb-6 text-gray-100">
        Estadísticas de Pruebas
      </h1>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 w-full">
        {testResults.map((test, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center border border-gray-200 text-center"
          >
            <h2 className="text-sm font-semibold text-gray-800 mb-2">
              {test.title}
            </h2>
            <div className="text-blue-600 text-2xl font-bold mb-2">
              {test.number}
            </div>
            <p className="text-gray-600 text-xs font-medium">{test.metric}</p>
            <p className="text-gray-500 text-xs">{test.details}</p>
          </div>
        ))}
      </div>

      {/* Gráficas por usuario */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {userTaskData.map((userData, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center"
          >
            <h2 className="text-sm font-bold text-center text-gray-800 mb-4">
              {userData.user}
            </h2>
            <div className="w-full">
              {index % 3 === 0 ? (
                <Bar
                  data={generateBarData(userData)}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true, max: 15 } },
                  }}
                />
              ) : index % 3 === 1 ? (
                <Pie
                  data={generatePieData(userData)}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: true, position: "right" },
                    },
                  }}
                />
              ) : (
                <Line
                  data={generateLineData(userData)}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true, max: 15 } },
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstadisticasPruebas;
