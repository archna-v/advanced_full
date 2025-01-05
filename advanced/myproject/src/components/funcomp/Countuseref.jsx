import '../../assets/css/NavBar.css'
import { useEffect,useRef,useState } from "react";
var Useref =()=>{
    var [num,setNum] = useState(0);
    var prev = useRef()
    useEffect(()=>{
        prev.number=num
       },[num])
   
    return(
        <div>
        
            <button class ="button"  onClick={(e) => setNum(num+1)}>increment</button>
            <button class = "button" onClick={(e) => setNum(num-1)}>decrement</button>
            <h2>The count is {num}</h2>
            <h2>The previous count is {prev.number}</h2>
        </div>
    )
}
export default Useref