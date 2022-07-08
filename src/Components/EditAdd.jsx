const EditAdd=({handleChange,form,editar,peticionPost,peticionPut})=>
{
    return (
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
    )
}
export default EditAdd