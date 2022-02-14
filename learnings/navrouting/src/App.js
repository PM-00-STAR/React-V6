
import React from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Contact/>
      
      <Routes>
      <Route path="/" element ={Home} />
      <Route path="/About" element ={About} />
      <Route path="/Contact" element ={Contact} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
