import UserStats from '../components/UserStats';
import TareasStats from "../components/TareasStats";

const EstadisticasPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-gray-100 mb-6">Indicadores</h1>

            {/* Contenedor para organizar las estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                    <UserStats />
                </div>
                <div className="flex justify-center">
                    <TareasStats />
                </div>
            </div>
        </div>
    );
};

export default EstadisticasPage;
