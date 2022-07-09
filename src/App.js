import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Inicio from './Components/Inicio';
import EditAdd from './Components/EditAdd'
import Swal from 'sweetalert2'
import "bootstrap/dist/css/bootstrap.min.css";
const url = "https://backalkemy.herokuapp.com/productos";
// const url ="http://localhost:4000/productos"
const App=()=>{
  const [data,setData]=useState([]);
  const [peticion,setPeticion]=useState(true);
  const [editar,setEditar]=useState(false)
  const [form,setForm]=useState({id:'',code: '',price: '',desc:'',img:''})
  const [product,setProduct]=useState({})

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

  const peticionGetOne = (id) => {
    axios.get(`${url}/showOne/${id}`).then(response => {
      Swal.fire({
        title: response.data.code,
        html:
          `<p>${response.data.desc}</P>
          <img width='150px' src=${response.data.img} />
          `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          'Cerrar',
        
      })
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
           <Inicio 
           setPeticion={setPeticion}
           peticionGetOne={peticionGetOne}
           data={data}
           />             :
          <EditAdd
          handleChange={handleChange}
          form={form}
          peticionPost={peticionPost}
          peticionPut={peticionPut}
          />
          }
        </div>
      </div>
    );
}
export default App;