import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CrearResena = () => {
    const [resena, setResena] = useState({
        comentario: '',
        puntuacion: 1, // Puntuación inicial como ejemplo
    });
    const { id } = useParams(); // ID del libro para el cual se crea la reseña
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResena({ ...resena, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar la reseña al servidor
        // Por ejemplo:
        try {
            const response = await fetch('http://localhost:8081/api/resenas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...resena, libroId: id }),
            });
            if (response.ok) {
                navigate(`/libros/${id}`); // Navegar de vuelta a los detalles del libro
            } else {
                // Manejar errores de la respuesta
                console.error('Error al enviar la reseña');
            }
        } catch (error) {
            console.error('Error al enviar la reseña', error);
        }
    };

    return (
        <div className="container">
            <h2>Crear Reseña para el Libro {id}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="comentario">Comentario</label>
                    <textarea
                        className="form-control"
                        id="comentario"
                        name="comentario"
                        value={resena.comentario}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="puntuacion">Puntuación</label>
                    <select
                        className="form-control"
                        id="puntuacion"
                        name="puntuacion"
                        value={resena.puntuacion}
                        onChange={handleChange}
                    >
                        {[1, 2, 3, 4, 5].map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Reseña</button>
            </form>
        </div>
    );
};

export default CrearResena;


