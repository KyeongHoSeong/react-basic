import React, { Component } from 'react';

import Button from '../components/Button';
import Display from '../components/Display';

export class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        // this.increaseCounter = this.increaseCounter.bind(this);
        // this.decreaseCounter = this.decreaseCounter.bind(this);
    }

    // increaseCounter() {
    //     // console.log('+clicked');
    //    실제 원하는 상황: return () => console.log('+clicked');
    // }

    // increaseCounter() { //bind 문제 야기
    //     console.log('+clicked');
    //     console.log(this);
    //     this.state.number++;  
    // }   

    //bind와 함께 사용
    // increaseCounter() {
    //     console.log('+clicked'); 
    //     // this.setState( {
    //     // })
    // }

    //bind없이 사용하려면, ()=>
    increaseCounter =() => {
        console.log('+clicked'); 
        console.log(this);
        this.setState({
            number: this.state.number + 1
        });
    }

    decreaseCounter() {
        console.log('-clicked');
        console.log(this);
        this.setState({
            number: this.state.number - 1
        });
    }

    clickHandler = (payload) => {
        console.log('clicked');
        this.setState({
            number: this.state.number + payload
        });
    }

    render() {
        return (
            <div className="container">
                <Display value= {this.state.number} />
                {/* <button onClick ={this.increaseCounter()}>+ 버턴</button> */}
                {/* 문제: increaseCounter()를 실행한 결과를 넣는다. */}

                {/* 문제: 중복 사용 */}
                {/* <button onClick ={this.increaseCounter}>+ 버턴</button>
                <button onClick ={this.decreaseCounter}>- 버턴</button> */}

                {/* <button onClick ={() => this.clickHandler(+1)}>+ 버턴</button> */}
                {/* <button onClick ={() => this.clickHandler(-1)}>- 버턴</button> */}
                <Button clickHandler={() => this.clickHandler(+1)}>+ 버턴</Button>
                <Button clickHandler={() => this.clickHandler(-1)}>1 버턴</Button>
            </div>
        )
    }
}

export default CounterApp
