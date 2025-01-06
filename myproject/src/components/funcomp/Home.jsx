import "./css/Home.css";
var Home = () => {
  var styling = {
    fontSize: "30px",
    textDecoration: "underline",
    color: "cyan",
  };
  return (
    <div>
      <h1 style={styling} id="idSEg">This is Home Page</h1>
      <h2 id="idSEg">HELLOO I'M ARCHNA!!!</h2>
      <p className = "box-model">Heyy there!!</p>
    </div>
  );
};
export default Home;