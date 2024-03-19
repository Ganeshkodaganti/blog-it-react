import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="mb-3">
    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"></input>
  </div>
  </>
  );
}

export default App;
