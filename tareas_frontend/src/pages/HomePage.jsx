function HomePage() {
    return (
        <div className="min-h-screen bg-zinc-800 p-6 flex flex-col items-center">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-100">Bienvenido al Administrador de Tareas</h1>
                <p className="text-lg text-gray-100 mt-2">Una forma sencilla de organizar, seguir y gestionar tus tareas</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Tarjeta: Agregar Tareas */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-green-100">
                    <div className="text-center mb-4">
                        <span className="bg-green-500 text-white text-xl p-2 rounded-full">
                            +
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Agregar Tareas</h2>
                    <p className="text-gray-800 mt-4">
                        Agrega fácilmente nuevas tareas completando un formulario simple. ¡Organiza todas tus tareas en un solo lugar y nunca olvides un plazo!
                    </p>
                </div>

                {/* Tarjeta: Ver Tareas */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-100">
                    <div className="text-center mb-4">
                        <span className="bg-blue-500 text-white text-xl p-2 rounded-full">
                            📋
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Ver Tareas</h2>
                    <p className="text-gray-800 mt-4">
                        Visualiza y sigue todas tus tareas pendientes de forma clara y organizada. ¡Nunca pierdas de vista lo que necesitas hacer!
                    </p>
                </div>

                {/* Tarjeta: Editar Tareas */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-yellow-100">
                    <div className="text-center mb-4">
                        <span className="bg-yellow-500 text-white text-xl p-2 rounded-full">
                            ✏️
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Editar Tareas</h2>
                    <p className="text-gray-800 mt-4">
                        Puedes editar tus tareas en cualquier momento para actualizar detalles como fechas, prioridades y más. ¡Mantén todo actualizado!
                    </p>
                </div>

                {/* Tarjeta: Eliminar Tareas */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-red-100">
                    <div className="text-center mb-4">
                        <span className="bg-red-300 text-white text-xl p-2 rounded-full">
                            ❌
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Eliminar Tareas</h2>
                    <p className="text-gray-800 mt-4">
                        Una vez que hayas completado una tarea, puedes eliminarla fácilmente para mantener tu lista limpia y organizada.
                    </p>
                </div>

                {/* Tarjeta: Estadísticas */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-100">
                    <div className="text-center mb-4">
                        <span className="bg-purple-500 text-white text-xl p-2 rounded-full">
                            📊
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Estadísticas</h2>
                    <p className="text-gray-800 mt-4">
                        Visualiza datos sobre las pruebas realizadas con gráficos interactivos y fáciles de entender.
                    </p>
                </div>

                {/* Tarjeta: Proyecciones */}
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-indigo-100">
                    <div className="text-center mb-4">
                        <span className="bg-indigo-500 text-white text-xl p-2 rounded-full">
                            🔮
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Proyecciones</h2>
                    <p className="text-gray-800 mt-4">
                        Obtén predicciones sobre el rendimiento de los usuarios en el sistema para futuras mejoras.
                    </p>
                </div>
            </div>

            <footer className="mt-12 text-center">
                <p className="text-sm text-gray-100">
                    © 2024 Administrador de Tareas - Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
}

export default HomePage;
