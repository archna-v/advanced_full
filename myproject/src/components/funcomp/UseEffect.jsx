/*import { useState ,useEffect} from "react";
import axios from 'axios';

var UseEffect = () => {
    
    //var [text, setText] = useState("kongu");

    
   // const handleChange = (e) => {
    //    setText(e.target.value); 
       
    //};

  //  return (
   //     <section>
   //         <h1>use effect example</h1>
    //        <input 
    //            type="text" 
     /*}           placeholder="Enter your text" 
                value={text}     
                onChange={handleChange} 
            />
            <h2>Text typed is: {text}</h2>
        </section>
    );*/
   /* useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/")
          .then((res) => {
            setPost(res.data); // Update state with fetched data
            console.log(res); // Optionally log the response
          })
          .catch((error) => {
            console.error("Error fetching data:", error); // Log errors
          });
      }, []); // Empty dependency array to run the effect only once on mount
    
      return (
        <section>
          <h1>Fetching Data from Placeholder API</h1>
          <h2>Posts:</h2>
          <ul>
            {/* Display the list of posts */
           /* {post.length > 0 ? (
              post.map((item) => (
                <li key={item.id}>{item.title}</li> // Display each post title
              ))
            ) : (
              <p>Loading posts...</p> // Show loading message if posts are not fetched yet
            )}
          </ul>
        </section>
      );
    };
    
    export default UseEffect;*/
    import React, { useState, useEffect } from "react";
    import axios from "axios";
    
    const UseEffect = () => {
     
      const [post, setPost] = useState([]);
    
      
      useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/")
          .then((res) => {
            setPost(res.data); 
            console.log(res); 
          })
          .catch((error) => {
            console.error("Error fetching data:", error); 
          });
      }, []); 
    
      return (
        <section>
          <h1>Fetching Data from Placeholder API</h1>
          <h2>Posts:</h2>
          
            
              {post.map((item) => (
                <li key={item.id}>{item.title}</li> 
              ))}
            
         
        </section>
      );
    };
    
    export default UseEffect;
    