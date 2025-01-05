import { useState } from "react";
const Gallery = () => {
  var [counter,setCount] = useState(0);
  return (
    <section>
      <h1>This is Gallery Page</h1>
      <h2 style={{textAlign:"center"}}>Learning State Concept</h2>
      <h3>The state of my variable counter is {counter}</h3>
      <button onMouseOver={()=>{setCount(counter + 1)}}>Increment</button>
      <button onDoubleClick={()=>{setCount(counter - 1)}}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>    
    </section>
  );
};

export default Gallery;