import React from 'react'

const Person = (props) => (
            <div>
                <h1> 이름: {props.name}, 나이: {props.age} </h1>
                <h2> Who are you? {props.children}  </h2>
                {/* {props.myFunction} 함수 가져오기*/}
                {/* 함수를 실행하려면... */}
                {props.myFunction()} 
                { console.log(props.stat)}

            </div>
)
export default Person

 