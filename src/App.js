import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const url = "http://localhost:4000/productos";
const App=()=>{
  const [data,setData]=useState([]);
  const [peticion,setPeticion]=useState(true);
  const [editar,setEditar]=useState(false)
  const [form,setForm]=useState({id:'',code: '',price: '',desc:'',img:''})

  useEffect(()=>{
    peticionGet();
  },[])

  const peticionGet = () => {
    axios.get(url).then(response => {
      console.log(response.data);
      setData(response.data)
    }).catch(error => {
      console.log(error.message);
    })
  }

  const peticionPost = async () => {
    delete form.id;
    await axios.post(url+'/add', form).then(response => {
      setPeticion(true)
      peticionGet();
      setEditar(false)
    }).catch(error => {
      console.log(error.message);
    })
  }

  const peticionPut = () => {
    alert(form);
    axios.put(url + { id: form.id, info: form }).then(response => {
      setPeticion(false)
      setEditar(false)
      peticionGet();
    })
  }

  const peticionDelete = () => {
    axios.delete(url + form.id).then(response => {
      peticionGet();
    })
  }

  const seleccionarUsuario = (id,usuario) => {
    setForm({
        code:usuario.code,
        price:usuario.price,
        desc:usuario.desc,
        img:usuario.img
      })
  }

  const handleChange = async e => {
    e.persist();
    console.log([e.target.name]);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    
    console.log(form);
  }
  const editOne=(id)=>{
    let user =data.filter((d)=>d.id===id);
    alert(user.id)
    setPeticion(false); 
    setEditar(true);
    seleccionarUsuario(id,data)
  }
  const eliminarOne=(id)=>{alert(id)
    seleccionarUsuario(id,data); 
    peticionDelete()
  }
    return (
      <div className="container">
        <div className='row d-flex jusitfy-conten-center'>
          {peticion ?
            <div className='mb-3 m-3'>
              <button className="btn btn-success"
                onClick={()=>setPeticion(false)}>
                Agregar Producto</button>

              <table className="table ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Código</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>imagen</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(usuario => {
                    return (
                      <tr>
                        <td>{usuario._id}</td>
                        <td>{usuario.code}</td>
                        <td>{usuario.price}</td>
                        <td>{usuario.desc}</td>
                        <td>{usuario.img}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            :
            <div className="form-group">
                    <div className='mb-3'>
                      <label htmlFor="id">ID</label>
                      <input className="form-control" type="text" name="id" id="id" readOnly onChange={handleChange} value={form ? form.id : ''} />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="nombre">Código</label>
                      <input className="form-control" type="text" name="code" id="code" onChange={handleChange} value={form ? form.code : ''} />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="nombre">Precio</label>
                      <input className="form-control" type="text" name="price" id="price" onChange={handleChange} value={form ? form.price : ''} />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="nombre">Descripción</label>
                      <input className="form-control" type="text" name="desc" id="desc" onChange={handleChange} value={form ? form.desc : ''} />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="nombre">Img</label>
                      <input className="form-control" type="text" name="img" id="img" onChange={handleChange} value={form ? form.img : ''} />
                    </div>
                    {editar?
                    <div className='mb-3'>
                      <button className="btn btn-success" onClick={() =>peticionPut()}>
                        Editar
                      </button>
                </div>:
                    <div className='mb-3'>
                    <button className="btn btn-success" onClick={() => peticionPost()}>
                      Agregar
                    </button>
                </div>
                }
            </div>
          }
        </div>
      </div>
    );
}
export default App;