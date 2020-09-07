import React, { Component } from 'react';
import './App.css';
//import FunctionPorps from './exampleApps/FunctionPropsApp';
//import CounterApp from './exampleApps/CounterApp';
import ToDoApp from './exampleApps/ToDoApp';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 예: <FunctionPropsApp /> */}
        {/* <CounterApp /> */}
        <ToDoApp />
      </div>
    )
  }
}

export default App
