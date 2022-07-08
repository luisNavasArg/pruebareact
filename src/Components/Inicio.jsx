const Inicio=({setPeticion,peticionGetOne,data})=>{
    return(
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
                  <td><img onClick={()=>peticionGetOne(usuario._id)} style={{width: '150px'}} src={usuario.img} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}
export default Inicio