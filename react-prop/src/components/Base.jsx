import React, {useState, useEffect} from 'react'

const Base = () => {
    const [nombre,setNombre] = useState('Pedro');
    useEffect(()=>{
        setTimeout(()=>{
            setNombre('Manuel')
        },2000)
    })


    return (
        <div>
            <h1>Pagina Raiz</h1>
            <h2>{nombre}</h2>
        </div>
    )
}

export default Base
