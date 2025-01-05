const About = (props) => {
    return (
      <section>
        <h1>This is my About Page</h1>
        <h2 style={{textAlign:"center"}}>Learning Props</h2>
       
        <h2>I am teaching in {props.college} College</h2>
        <h3>Other Colleges: {props.clg1},{props.clg2}</h3>
      </section>
    );
  };
  
  export default About;