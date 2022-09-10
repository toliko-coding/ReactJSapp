import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as React from 'react';


function DarkButton(arg) {
    return (
      <div className="App">
      <button type="button" class="btn btn-dark">{arg.arg}</button>
  </div>
    );
  }


export default DarkButton;
