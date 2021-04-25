import React from 'react';
import './App.scss';
import {Form} from "./components/form/Form";
import {Modal} from "./components/modal/Modal";

function App() {
  return (
    <div className="App">
        <Form/>
        <Modal/>
    </div>
  );
}

export default App;
