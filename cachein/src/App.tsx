import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [name, setName] = useState("");
    const [boxes, setBoxes] = useState(1);
    const [temp, setTemp] = useState("");
    const [location, setLocation] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");


    function addEmployee() {
      axios.post('http://localhost:3011/create', {
        namewa: name,
        boxes: boxes,
        temp: temp,
        location: temp,
        start: start,
        end: end
      
        }).then(() => {
          console.log("it worked")
        })
    }


    function displayInfo() {
      console.log(name + boxes + temp + location + start + end);
    }

  return (
    <div className="App">
      <div className="inputs">
      <h1 className="header_One">CacheIn</h1>

      <label>Name of Storer</label>
      <input type="text" onChange = {(e) => setName(e.target.value)}></input>

      <label>Number of Boxes</label>
      <input type="number" onChange={(e) => setBoxes(e.target.valueAsNumber)}></input>

      <label>Temperature Controlled?</label>
      <input type="string" onChange = {(e) => setTemp(e.target.value)}></input>

      <label>Location being stored</label>
      <input type="text" onChange = {(e) => setLocation(e.target.value)}></input>

      <label>Start Date</label>
      <input type="text" onChange = {(e) => setStart(e.target.value)} ></input>

      <label>End Date</label>
      <input type="text" onChange = {(e) => setEnd(e.target.value)}></input>

      <button onClick = {addEmployee}>Add Storer</button>

        </div>
    </div>
    
  );
}

export default App;
