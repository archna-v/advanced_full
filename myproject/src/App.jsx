
import React from 'react'; 

import NavBar from './components/funcomp/NavBar';
import './App.css'; 
import About from './components/funcomp/About'
import Contact from './components/funcomp/Contact'
import Gallery from './components/funcomp/Gallery'
import Home from './components/funcomp/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/funcomp/Footer';
import UseEffect from './components/funcomp/UseEffect'
import UseRef from './components/funcomp/UseRef'
import UseContext from './components/funcomp/Usecontext';
import UseMemo from './components/funcomp/UseMemo';
import Images from './components/funcomp/images';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
       
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/use-effect" element = {<UseEffect/>} />
          <Route path="/use-ref" element = {<UseRef/>} />
          <Route path="/use-context" element = {<UseContext/>} />
          <Route path="/use-memo" element = {<UseMemo/>} />
          <Route path="/images" element = {<Images/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
       
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;