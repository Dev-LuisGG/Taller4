import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Resena from './Resena'; // Asegúrate de que este componente exista y esté correctamente implementado

const DetalleLibro = () => {
    const [libro, setLibro] = useState(null);
    const [resenas, setResenas] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch para obtener los detalles del libro
        const fetchLibro = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/libros/${id}`);
                if (!response.ok) throw new Error('Error al cargar el libro');
                const data = await response.json();
                setLibro(data);
            } catch (error) {
                console.error(error);
            }
        };

        // Fetch para obtener las reseñas del libro
        const fetchResenas = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/resenas/por-libro?libroId=${id}`);
                if (!response.ok) throw new Error('Error al cargar las reseñas');
                const data = await response.json();
                setResenas(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLibro();
        fetchResenas();
    }, [id]);

    const handleCrearResenaClick = () => {
        navigate(`crear-resena`); // Esto navegará a /libros/:id/crear-resena
    };

    // Si el libro aún no se ha cargado, muestra un mensaje de carga
    if (!libro) {
        return <div>Cargando detalles del libro...</div>;
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{libro.titulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{libro.autor}</h6>
                    <p className="card-text">{libro.sinopsis}</p>
                </div>
            </div>
            
            <button onClick={handleCrearResenaClick} className="btn btn-primary mt-3">Crear Reseña</button>
            
            <div className="mt-3">
                <h3>Reseñas</h3>
                {resenas.length > 0 ? (
                    resenas.map(resena => <Resena key={resena.id} resena={resena} />)
                ) : (
                    <p>No hay reseñas aún para este libro.</p>
                )}
            </div>
        </div>
    );
};

export default DetalleLibro;


