import "./segundo.css"
import{useState} from "react";
export default function SegundoComponente(){
    const [num,setNum] = useState(0)
    function handleZero(){
        setNum(0)
    }
    function handleFive(){
        setNum(5)
    }
    return(
        <>
        <p className="segundo">
            {num}
            {num === 0 ? <></> : <button onClick={handleZero}>Zero</button>}
            {num === 5 ? <></> : <button onClick={handleFive}>Cinco</button>}
            
        </p>
        </>
    )
}