import React, { useState } from 'react';

const CrearLibro = () => {
    const [libro, setLibro] = useState({
        titulo: '',
        autor: '',
        sinopsis: '',
        añoPublicacion: ''
    });

    const handleChange = (e) => {
        setLibro({ ...libro, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/libros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(libro),
            });

            if (response.ok) {
                alert('Libro creado con éxito');
                setLibro({ titulo: '', autor: '', sinopsis: '', añoPublicacion: '' });
            } else {
                alert('Error al crear el libro');
            }
        } catch (error) {
            console.error('Error al crear el libro:', error);
        }
    };

    return (
        <div>
            <h2>Crear Libro</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        id="titulo"
                        name="titulo"
                        value={libro.titulo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="autor" className="form-label">Autor</label>
                    <input
                        type="text"
                        className="form-control"
                        id="autor"
                        name="autor"
                        value={libro.autor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="sinopsis" className="form-label">Sinopsis</label>
                    <textarea
                        className="form-control"
                        id="sinopsis"
                        name="sinopsis"
                        value={libro.sinopsis}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="añoPublicacion" className="form-label">Año de Publicación</label>
                    <input
                        type="number"
                        className="form-control"
                        id="anioPublicacion"
                        name="anioPublicacion"
                        value={libro.anioPublicacion}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Crear Libro</button>
            </form>
        </div>
    );
}

export default CrearLibro;
