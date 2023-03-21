class Pedido{
    list=[]
    user={}
    constructor(){
        this.list=[]
    }
    addProduct(product){
        this.list=[...this.list,product]
        console.log(this.getProduts());
    }
    getProduts(){
        return this.list
    }
    calculatePrice(){
        let total = this.list.forEach(product=>total +=product.price*product.cant)
    }
}
export default Pedido