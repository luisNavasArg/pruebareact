const Inicio=({setPeticion,peticionGetOne,data,produts,setProducts})=>{

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
            {data.map((product,index) => {
              return (
                <tr key={`${index}-product`}>
                  <td>{product._id}</td>
                  <td>{product.code}</td>
                  <td>{product.price}</td>
                  <td>{product.desc}</td>
                  <td><img onClick={()=>peticionGetOne(product._id)} style={{width: '150px'}} src={product.img} alt={`img${product.id}`} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}
export default Inicio