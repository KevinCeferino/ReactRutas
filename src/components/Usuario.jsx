import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';

const Usuario=()=>{
    const[usuario,setUsuario] = useState([])
    const {id} =useParams()
    const obtenerUsuario=async()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users =await res.data
        setUsuario(users)
    }
    useEffect(()=>{
        obtenerUsuario()
    },[])

    return(
        <div>
            <h4>Usuario</h4>
            <p>Nombres: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <small>Teléfono: {usuario.phone}</small>
        </div>
    )
}
export default Usuario