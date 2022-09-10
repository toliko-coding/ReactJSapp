import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as React from 'react';
import DarkButton from './DarkBtn'


function getData()
{
  return "Toli";  
}


function App() {


const realprops = "toli";
console.log(realprops)

  return (
    <div className="App">
    <DarkButton arg = {realprops}/>
</div>
  );
}


export default App;
