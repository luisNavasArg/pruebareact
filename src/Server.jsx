import { useState } from "react"

const App=()=>{
    const info=`const sumar=(a,b)=>a+b`
    
    
    const [text,setText]=useState('')
    const [puntos,setPuntos]=useState(0)
    const validar=(ev)=>{
        // mostrar(ev.target.value)
        setText(ev.target.value)
        document.getElementById("miText").innerHTML=ev.target.value
    }
    const mostrar=(ev)=>{
        ev.preventDefault()
        let arraText = text.split(" ");
        let arrayInfo = info.split(" ");
        console.log(arrayInfo);
        console.log(arraText);
        let misPuntos=0
       arrayInfo.forEach((element,index) => {
            if(element===arraText[index]){
                misPuntos++
            }
       });
       setPuntos(misPuntos)
    }
    return(
        <div>
            <form>
                <input onChange={validar} type={"text"} id='text'/>
                <button onClick={mostrar}>Mirar</button>
                <p id="miText"></p>
                {text}
                {puntos}
            </form>
        </div>
    )
}
export default App