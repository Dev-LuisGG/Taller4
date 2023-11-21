import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CrearLibro from './components/CrearLibro';
import MostrarLibros from './components/MostrarLibros';
import DetalleLibro from './components/DetalleLibro';
import CrearResena from './components/CrearResena'; // Asegúrate de que este componente exista y esté correctamente implementado

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<MostrarLibros />} />
                    <Route path="/crear-libro" element={<CrearLibro />} />
                    <Route path="/libros/:id" element={<DetalleLibro />} />
                    <Route path="/libros/:id/crear-resena" element={<CrearResena />} />
                    <Route path="/mostrar-libros" element={<MostrarLibros />} />

                    {/* Asegúrate de incluir todas las rutas necesarias */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
