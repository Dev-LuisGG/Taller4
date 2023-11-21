import React from 'react';

const Resena = ({ resena }) => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p className="card-text">{resena.comentario}</p>
                <p className="card-text">Puntuación: {resena.puntuacion} / 5</p>
            </div>
        </div>
    );
};

export default Resena;


