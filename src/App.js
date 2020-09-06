import React, { Component } from 'react';
import './App.css';

import Person from './components/Person';
import Animal from './components/Animal';

class App extends Component {
  constructor(){
    super();
    this.state = {
      person: [
        { name: "홍길동", age: 20 },
        { name: "이흥부", age: 33 },
        { name: "박놀부", age: 43 },
      ],
      animal: [
        { name: "펭귄", area:"남극"},
        { name: "코끼리", area:"아프리카"},
      ]
    };
  }

  render() {
    const {person, animal} = this.state;
    return (
      <div className="App">
        {/* Task: 여기에 특정 내용(사람의 이름과 나이)를  표시.*/}
        {/* component를 통하여 과제를 해결하도록 만든다. */}
        {/* 속성으로 component에 값을 전달할 수 있다. */}
        {/* <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}>
          {" "}
        </Person>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        /> */}

        <Person 
          name={person[0].name} 
          age={person[0].age}>
          {" "}
        </Person>
        <Person
          name={person[1].name}
          age={person[1].age}
        />
        <Person
          name={person[2].name}
          age={person[2].age}
        />
        {/* <Animal name={"원숭이"} area={"아프리카"} /> */}
        {/* <Animal name={this.state.animal[0].name} area={this.state.animal[0].area} />
        <Animal name={this.state.animal[1].name} area={this.state.animal[1].area} /> */}

        <Animal name={animal[0].name} area={animal[0].area} />
        <Animal name={animal[0].name} area={animal[1].area} />

      </div>
    );
  }
}

export default App
