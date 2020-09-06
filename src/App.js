import React, { Component, Fragment } from 'react';
import './App.css';
class App extends Component {
  render() {
    // return (
    //     <div className = "App">
    //       <h1>Hello World</h1>
    //     </div>
    //   );
    //return React.createElement("div", {className: "App"}, "I am child!");
    //return React.createElement("div", null, "I am child!");
    // return React.createElement("div", className="App", "I am child!"); 에러
    //return React.createElement("div", {className: "App"}, "I am child!");
    //return React.createElement("div", {className: "App"}, "I am child!", "p")
    //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "this is h1"));
    // return React.createElement(
    //   "div", {className: "App"}, 
    //   React.createElement("h1", null, "this is h1"),
    //   React.createElement("h1", null, "this is h2"),
    //   React.createElement("h1", null, "this is h3"),
    //   React.createElement("h1", null, "this is h4"),
    //   );
      // 문제: 불편하다. so, JSX가 필요하다.

       return (
        <Fragment className = "App">
        
          <h1>this is h1</h1>
          <h1>this is h2</h1>
          <h1>this is h3</h1>
          <h1>this is h4</h1>

          {/* <person> </person> */}
          <Person> </Person>
          <Person> </Person>
          <Person> </Person>

        </Fragment>
      );
  }
 
}

// function person() {
//   return ( 
//     <h1> 1st Coponent ! </h1>
//     <h2> Component는 Uppercase로 시작</h2>
//   )
// }


// function Person() {
//   return ( 
//     <Fragment>
//     <h1> 1st Coponent ! </h1>
//     <h2> Component는 Uppercase로 시작</h2>
//     </Fragment>
//   )
// }

const Person = () => { //ES6
  return ( 
    <Fragment>
    <h1> 1st Coponent ! </h1>
    <h2> Component는 Uppercase로 시작</h2>
    <h2> function을 arrow Function으로 ....</h2>
    </Fragment>
  )
}

export default App
