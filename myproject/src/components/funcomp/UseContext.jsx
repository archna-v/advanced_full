import React from "react";
import Component2 from "./contextComponents/Component2";

export var ThemeProvider = React.createContext()
var UseContext= () =>{
   // var ThemeProvider = createContext()
    return (
        <section>
            <ThemeProvider.Provider value={{sgpa :"10.00",cgpa:"10.00"}}>
            <h1>This is an example of useContext - parent Component</h1>
           <h1>This is an example of usecontext</h1>
            <Component2 />
            </ThemeProvider.Provider>
        </section>
    );
}
export default UseContext;