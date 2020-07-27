import React, {useState} from 'react';
import InputForm from './components/InputForm/InputForm';
import './App.css';
import OutputForm from "./components/OutputForm/OutputForm";

function App() {
  const [output, setOutput] = useState({})
  console.log(output)
  return (
    <div className="App">
        <h1>Sprout Therapy Assignment</h1>
        <InputForm setOutput={setOutput}/>
        <OutputForm output={output}/>
    </div>
  );
}

export default App;
