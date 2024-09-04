import "./primeiro.css"
import { useState } from "react"

export default function PrimeiroComponente(){
    const [num, setNum] = useState(10);
    function increment(){
        setNum(num+1)
    }
    function decrement(){
        setNum(num-1)
    }
    return(
        <p className="paragrafo">
            {num}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </p>
    )
}