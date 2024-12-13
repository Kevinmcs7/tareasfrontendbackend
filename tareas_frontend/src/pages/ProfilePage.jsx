
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-800">Cargando perfil...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-800 p-6 text-white">
      {/* Título */}
      <header className="bg-zinc-700 p-4 shadow-md text-center rounded-lg">
        <h1 className="text-3xl font-bold">Perfil de Usuario</h1>
      </header>

      {/* Contenido del Perfil */}
      <div className="max-w-3xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detalles del Usuario</h2>
        <ul className="text-gray-800 space-y-3">
          <li><strong>Nombre de Usuario:</strong> {user.username}</li>
          <li><strong>Correo Electrónico:</strong> {user.email}</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
