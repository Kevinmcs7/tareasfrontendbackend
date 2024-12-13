import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10">
      <Link to={
        isAuthenticated ? "/preguntas" : "/"
      }>
        <h1 className="text-2xl font-bold">Tareas</h1>{" "}
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/Estadisticas"
          className="bg-blue-500 hover: bg-blue-600 text-white px-4 py-2 rounded-md"
          >Estadisticas</Link>
            </li>
            <li>
              <Link to="/EstadisticasPruebas"
          className="bg-blue-500 hover: bg-blue-600 text-white px-4 py-2 rounded-md"
          >Estadisticas Pruebas</Link>
            </li>
            <li>
              <Link to="/Proyecciones"
          className=": bg-blue-600 text-white px-4 py-2 rounded-md"
          >Proyecciones</Link>
            </li>
            <li>
              <Link to="/add-preguntas"
          className="bg-blue-500 hover: bg-blue-600 text-white px-4 py-2 rounded-md"
          >Add Pregunta</Link>
            </li>

            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
                className="bg-red-500 hover: bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login"
              className="bg-indigo-500 px-4 py-1 rounded-sm"
              >Login</Link>
            </li>

            <li>
              <Link to="/register"
              className="bg-indigo-500 px-4 py-1 rounded-sm"
              >Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
