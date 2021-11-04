import React, { useState, useEffect } from "react";
import { Fondo, ErrorTag, Borrar } from './Styles/Styled';
import { store } from './firebaseconf'
function App() {
  const [modoEdicion, setModoEdicion] = useState(null)
  const [idUs, setIdUs] = useState('');
  const [nombre, setNombre] = useState('');
  const [phone, setPhone] = useState('');
  const [usuariosLista, setUsuariosLista] = useState([]);
  const [error, setError] = useState('');

  const getUsuariosLista = async () => {
    //object extractory de  la propiedad de una respuesta doc y guarda la constante
    const { docs } = await store.collection('agenda').get();
    const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }));
    setUsuariosLista(nuevoArray)
  }
  useEffect(() => {
    getUsuariosLista();
  }, [])
  const setUsuarios = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError('El campo nombre esta vacio ')
    }
    if (!phone.trim()) {
      setError('El campo telefono esta vacio ')
    }
    if (!nombre.trim() & !phone.trim()) {
      setError('Los campos nombre y telefono estan vacios ')
    }
    const usuario = {
      nombre: nombre,
      telefono: phone
    }
    try {
      await store.collection('agenda').add(usuario)

      getUsuariosLista();

      alert('usuario añadido')
    } catch (e) {
      console.log(e)
    }
    setNombre('')
    setPhone('')
  }
  const setUpdate = async (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setError('El campo nombre esta vacio ')
    }
    if (!phone.trim()) {
      setError('El campo telefono esta vacio ')
    }
    if (!nombre.trim() & !phone.trim()) {
      setError('Los campos nombre y telefono estan vacios ')
    }
    const usuarioUpdate = {
      nombre: nombre,
      telefono: phone
    }
    try {
      await store.collection('agenda').doc(idUs).set(usuarioUpdate)

      getUsuariosLista();

      alert('usuario editado')
    } catch (e) {
      console.log(e)
    }
    setNombre('')
    setPhone('')
    setIdUs('')
    setModoEdicion(false)
  }
  const borrarUsuario = async (id) => {
    try {
      await store.collection('agenda').doc(id).delete();
    } catch (e) {
      console.log(e);

    }
    getUsuariosLista();
  }

  const actualizarUsuario = async (id) => {
    try {
      const data = await store.collection('agenda').doc(id).get()
      const { nombre, telefono } = data.data()
      setNombre(nombre)
      setPhone(telefono)
      setIdUs(id)
      setModoEdicion(true)

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Fondo>
      <div
        className="container"
      >
        <div className="row">
          <div className="col">
            <h2>Formulario de usuarios</h2>
            <form
              onSubmit={
                modoEdicion ?
                  setUpdate
                  :
                  setUsuarios
              }
              className="form-group">
              <input
                value={nombre}
                onChange={(e) => { setNombre(e.target.value) }}
                className="form-control"
                type="text"
                placeholder="Introduce el nombre"
              />
              <input
                value={phone}
                onChange={(e) => { setPhone(e.target.value) }}
                className="form-control mt-3"
                placeholder="Introduce el numero"
                type="text"
              />
              {
                modoEdicion ?
                  (
                    <input type="submit" value="EDITAR" className="btn btn-dark btn-block mt-3 mx-4" />
                  )
                  :
                  (
                    <input type="submit" value="REGISTRAR" className="btn btn-dark btn-block mt-3 mx-4" />
                  )
              }
            </form>
            {
              error ?
                (
                  <ErrorTag>
                    <div>
                      <p>{error}</p>
                    </div>
                  </ErrorTag>
                )
                :
                (
                  <span></span>
                )
            }
          </div>
          <div className="col">
            <h2>Lista de contactos</h2>

            <ul className="list-group">
              {
                usuariosLista.lengh !== 0 ? (
                  usuariosLista.map(
                    item => (<a href="#" className="list-group-item" key={item.id}>
                    
                      <h4 className="mt-2">{item.nombre}</h4> {item.telefono}
                      <Borrar>
                        <button
                          onClick={(id) => { borrarUsuario(item.id) }}
                          className="btn btn-danger">
                          BORRAR
                        </button>
                        <button
                          onClick={(id) => { actualizarUsuario(item.id) }}
                          className="btn btn-info ms-2"
                        >
                          ACTUALIZAR
                        </button>
                      </Borrar>
                    </a>)
                  )
                )
                  :
                  (
                    <span>
                      No hay usuarios que mostrar.
                    </span>
                  )
              }
            </ul>
          </div>
        </div>
      </div>
    </Fondo>

  );
}

export default App;
