import { useState, useEffect } from 'react';
import { getPreguntasRequest } from '../api/Preguntas';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const TareasStats = () => {
    const [tareas, setTareas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTareas = async () => {
            try {
                const response = await getPreguntasRequest();
                setTareas(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTareas();
    }, []); 

    // Configuración de la gráfica de pastel
    const pieChartData = {
        labels: ['Tareas Registradas'], // Una sola categoría
        datasets: [
            {
                data: [tareas.length, 13 - tareas.length], // Tareas registradas y el resto vacío
                backgroundColor: ['#34D399', '#D1D5DB'], // Colores de las secciones
                hoverBackgroundColor: ['#2F855A', '#9CA3AF'], // Colores al pasar el ratón
            },
        ],
    };

    return (
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 w-full max-w-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Número de Tareas Registradas</h3>

            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="spinner-border text-green-500" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg shadow-md w-full max-w-sm">
                        <p className="text-2xl font-bold text-gray-700">{tareas.length}</p>
                        <p className="text-gray-600 mt-2">Tareas registradas Por usuario</p>
                    </div>

                    <div className="w-full max-w-sm">
                        <Pie data={pieChartData} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TareasStats;
