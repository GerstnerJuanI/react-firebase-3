import React, {useState} from 'react'
import {auth} from '../firebaseconfig'
import { useHistory } from 'react-router-dom';
const Login = () => {
    const historial = useHistory();
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [msgError,setMsgError] = useState(null)

    const RegistrarUsuario = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,pass)
            .then( 
                r => {
                    historial.push('/')
                })
            .catch(e =>{
                if(!email.trim()){
                    setMsgError('El campo email esta vacio')
                    return
                }
                if(!pass.trim()){
                    setMsgError('El campo password esta vacio')
                    return
                }
                if(e.code === 'auth/invalid-email'){
                    setMsgError('Formato Email Incorrecto')
                }
                if (e.code === 'auth/weak-password') {
                    setMsgError('La password debe tener 6 caracteres o mas')
                }
        })
        
        
    };

    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email,pass)
            .then((r) => {
                historial.push('/')
            })
            .catch((err) =>{
                if ( err.code === 'auth/wrong-password'){
                    setMsgError('contraseña incorrecta. Vuelva a intentarlo.')
                }
        })
        
        
    };
    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={RegistrarUsuario} className="form-group">
                    <input 
                        onChange={(e) =>{setEmail(e.target.value)}}
                        className='form-control'
                        placeholder='introduce el Email' 
                        type="text" />
                    <input 
                        onChange={(e) =>{setPass(e.target.value)}}
                        className='form-control mt-4'
                        placeholder='introduce la Password' 
                        type="password" />
                    <input 
                        className='btn btn-dark btn-block mt-4 ms-4' 
                        type="submit" 
                        value="Registrar Usuario" />
                
                <button className="btn btn-success btn-block mt-4 ms-4"
                        onClick={LoginUsuario}> Iniciar Sesión </button>

                </form>
                {
                    msgError ?
                    (
                        <div className='alert alert-danger mt-4'>
                            {msgError}
                        </div>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </div>
            <div className='col'></div>
        </div>
    )
}



export default Login
