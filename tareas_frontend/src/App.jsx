import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import PreguntasPage from "./pages/PreguntasPage";
import PreguntaFormPage  from "./pages/PreguntaFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import EstadisticasPage from "./pages/EstadisitcasPage";
import ProyeccionesPage from "./pages/ProyeccionesPage";
import EstadisticasPruebas from "./pages/EstadisticasPruebas";
import ProtectedRoute from "./ProtectedRoute";
import { PreguntaProvider } from "./context/PreguntasContext";
import Navbar from "./components/Navbar";


function App(){
  return(
    <AuthProvider>
     <PreguntaProvider>
     <BrowserRouter>
     <main className="container mx-auto px-10">
     <Navbar/> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        
       <Route element={<ProtectedRoute/>}>
          <Route path="/preguntas" element={<PreguntasPage/>}/>
          <Route path="/add-preguntas" element={<PreguntaFormPage/>}/>
          <Route path="/preguntas/:id" element={<PreguntaFormPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/Estadisticas" element={<EstadisticasPage/>}/>
          <Route path="/Proyecciones" element={<ProyeccionesPage/>}/>
          <Route path="/EstadisticasPruebas" element={<EstadisticasPruebas/>}/>
        </Route> 
      </Routes>
     </main>
    </BrowserRouter>
     </PreguntaProvider>
    </AuthProvider>
  )
}

export default App