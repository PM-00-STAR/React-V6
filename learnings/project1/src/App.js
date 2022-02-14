
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
//import Textform from './components/Textform'

function App() {
  return (
    <>
<Navbar title = "pratibha"
about="project"/>
<div className="container" my-3>
  {/* <Textform heading = "Prop used "/> */}
  <About/>
  </div>
 

</>
  );
}


export default App;
