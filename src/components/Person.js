// task:  이름과 나이를 전달 받아 페이지 렌드링
// props를 통하여 부모로부터 값을 전달 받는다.
// jsx내에서 자바스크립트를 표현하는 방법은 {}
import React, { Component } from 'react'
// // arrow function
//const Person = (props) => (
// const Person = ({ name, age }) => (
//   <div>
//     {/* 이름: {props.name}, 나이: {props.age} */}
//     이름: {name}, 나이: {age}
//   </div>
// );

// class component
class Person extends Component {
    render() {
        const { name, age} = this.props;
        return (
            <div>
                {/* 이름: {this.props.name}, 나이: {this.props.age} */}
                이름: {name}, 나이: {age}
            </div>
        )
    }
}

export default Person

 