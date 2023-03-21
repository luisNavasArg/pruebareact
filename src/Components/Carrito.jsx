import Pedido from '../container/Pedido'
const carrito = new Pedido()
const Carrito = () => {
    let products= carrito.getProduts()
    console.log(products)
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Código</th>
                            <th>Precio unitario</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(()=>{
                            return(
                                <tr>
                            <th>${products.cant}</th>
                        <th>${products.code}</th>
                        <th>${products.price}</th>
                        <th>${products.desc}</th>
                        </tr>)
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}
export default Carrito