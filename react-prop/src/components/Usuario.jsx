import React,{useState, useEffect} from 'react'
import Axios from 'axios'
import {Link , useParams} from 'react-router-dom'
const Usuario = () => {

    const [usuario,setUsuario] = useState([]);
    const {id} = useParams()
    const obtenerUsuario =  async()=>{
        const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await res.data;
        setUsuario(user);
    }
    useEffect(() => {
        obtenerUsuario()
    }, [])


    return (
        <div>
            <h3>Usuario </h3>
            <p>Nombre : {usuario.name} </p>
            <p>Email: {usuario.email} </p>
            <small>Telefono: {usuario.phone} </small>
        </div>
    )
}

export default Usuario
