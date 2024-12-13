import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProyeccionesPage() {
  const initialUsers = 10;
  const initialTasks = 10;
  const growthRate = 0.2; // 20%
  const months = ["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6"];

  const projectedUsers = [initialUsers];
  const projectedTasks = [initialTasks];

  for (let i = 1; i < months.length; i++) {
    projectedUsers.push(Math.round(projectedUsers[i - 1] * (1 + growthRate)));
    projectedTasks.push(Math.round(projectedTasks[i - 1] * (1 + growthRate)));
  }

  const data = {
    labels: months,
    datasets: [
      {
        label: "Usuarios registrados",
        data: projectedUsers,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Tareas agregadas",
        data: projectedTasks,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#000" },
      },
      y: {
        ticks: { color: "#000" },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-800 overflow-hidden">
      {/* Título */}
      <header className="bg-zinc-800 p-6 shadow-md text-center">
        <h1 className="text-xl font-bold text-center mb-6 text-zinc-100">Proyecciones</h1>
      </header>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 p-6 h-full">
        {/* Sección de Información */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 h-[400px] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Detalles</h2>
            <p className="text-gray-800 mb-4">
              Esta proyección asume un crecimiento mensual del <strong>20%</strong> en el número de usuarios registrados y tareas agregadas. 
              El cálculo se basa en la fórmula del crecimiento exponencial:
            </p>
            <p className="text-gray-800 mb-6">
              <strong>Fórmula:</strong> <em>Valor Actual = Valor Inicial × (1 + Tasa de Crecimiento) ^ Mes</em>
            </p>
          </div>
          <ul className="list-disc list-inside text-gray-800">
            <li><strong>Valor Inicial:</strong> Número inicial de usuarios o tareas.</li>
            <li><strong>Tasa de Crecimiento:</strong> 20% (0.2).</li>
            <li><strong>Mes:</strong> Tiempo en meses desde el inicio.</li>
          </ul>
        </div>

        {/* Sección de Gráfica */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 h-[400px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default ProyeccionesPage;
