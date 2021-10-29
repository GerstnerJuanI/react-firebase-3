import React, {useState} from 'react'
import {auth} from '../firebaseconfig'

const Login = () => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <form className="form-group">
                    <input 
                        onChange={(e) =>{setEmail(e.target.value)}}
                        className='form-control'
                        placeholder='introduce el Email' 
                        type="text" />
                    <input 
                        onChange={(e) =>{setPass(e.target.value)}}
                        className='form-control mt-4'
                        placeholder='introduce la Password' 
                        type="text" />
                    <input 
                        className='btn btn-dark btn-block mt-4' 
                        type="submit" 
                        value="Registrar Usuario" />
                </form>
            </div>
            <div className='col'></div>

            <h2>LOGIN</h2>
        </div>
    )
}

export default Login
