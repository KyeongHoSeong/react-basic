import React, { Component } from 'react';
import FunctionPorps from './exampleApps/FunctionPropsApp';
import CounterApp from './exampleApps/CounterApp';

export class App extends Component {
  render() {
    return (
      <div>
        {/* 예: <FunctionPropsApp /> */}
        <CounterApp />
      </div>
    )
  }
}

export default App
