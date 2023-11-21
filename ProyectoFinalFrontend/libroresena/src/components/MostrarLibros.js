import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MostrarLibros = () => {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const fetchLibros = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/libros');
                if (!response.ok) {
                    throw new Error('Datos no encontrados');
                }
                const data = await response.json();
                setLibros(data);
            } catch (error) {
                console.error('Error al obtener los libros:', error);
            }
        };

        fetchLibros();
    }, []);

    return (
        <div>
            <h2>Lista de Libros</h2>
            <div className="list-group">
                {libros.map(libro => (
                    <Link key={libro.id} 
                       className="list-group-item list-group-item-action" 
                       to={`/libros/${libro.id}`}>
                        <h5>{libro.titulo}</h5>
                        <p>Autor: {libro.autor}</p>
                        <p>Año de Publicación: {libro.anioPublicacion}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MostrarLibros;
