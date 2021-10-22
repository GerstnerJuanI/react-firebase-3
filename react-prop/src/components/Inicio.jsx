import React from 'react';
import {useParams} from 'react-router-dom';

const Inicio = () => {
    const {nombre,id,edad} = useParams();
    return (
        <div>
            <h1>Pagina de inicio</h1>
            <p>{nombre}</p>
            <p>{id}</p>
            <p> {edad} </p>
        </div>
    )
}

export default Inicio