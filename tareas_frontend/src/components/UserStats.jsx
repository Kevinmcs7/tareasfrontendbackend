import { useState, useEffect } from 'react';
import { getUserCountRequest } from '../api/userCount';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const UserStats = () => {
    const [userCount, setUserCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await getUserCountRequest();
                setUserCount(response.data.userCount);
            } catch (error) {
                console.error("Error fetching user count:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserCount();
    }, []); // Solo se ejecuta una vez al montar el componente

    // Configuración de la gráfica de barras
    const barChartData = {
        labels: ['Usuarios'], // Etiqueta única para la barra
        datasets: [
            {
                label: 'Número de Usuarios Registrados',
                data: [userCount], // Número de usuarios
                backgroundColor: '#3B82F6', // Color de la barra
                borderColor: '#2563EB', // Color del borde
                borderWidth: 1,
            },
        ],
    };

    const barChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `Usuarios: ${tooltipItem.raw}`,
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 w-full max-w-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Total de usuarios registrados</h3>
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="spinner-border text-blue-500" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : (
                <>
                    <p className="text-4xl font-bold text-blue-600 mb-4">{userCount}</p>
                    <div className="w-full h-64">
                        <Bar data={barChartData} options={barChartOptions} />
                    </div>
                </>
            )}
        </div>
    );
};

export default UserStats;
