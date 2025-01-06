import Useref from './Countuseref';
import { useEffect,useRef,useState } from "react";
var UseRef = () =>{
   var [text,setText] = useState("");
   var prevText = useRef("");
   useEffect(()=>{
    prevText.current=text
   },[text])
     return(
      
        <section>
            <h1>this is an example for useref</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <h2>My current render is {text}</h2>
            <h2>My previous render is {prevText.current}</h2>
            <Useref/>
            </section>
    );
}
export default UseRef;

