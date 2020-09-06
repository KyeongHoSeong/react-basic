import React, { Component } from 'react';
import './App.css';

import Person from './components/Person';

class App extends Component {
  constructor(){
    super();
    this.state = {
      person: [
        { name: "홍길동", age: 20 },
        { name: "이흥부", age: 33 },
        { name: "박놀부", age: 43 },
      ]
    };
  }

  render() {
    const {person} = this.state;
    const myFunction = () => { console.log("I am function")}
    return (
      <div className="App">
        <Person 
            name={person[0].name} 
            age={person[0].age}
            //myFunction = { () => console.log("I am function")}
            myFunction = {myFunction}

            // object 자체를 보내기
            stat = {this.state}
        />
      </div>
        //     {/* function을 props로 전달하기  */}
        //     {/* myFunction ={ () => console.log("test");}은 myFunction ={ () => return console.log("test")} */}
        // {/* children 전달 */}
        //     {/* <div>I am Children!!! (of person)</div> */}
        // {/* </Person> */}
      
    )
  }
}

export default App
