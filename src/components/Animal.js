import React, { Component } from 'react'

 class Animal extends Component {
    render() {
        const {name, area} = this.props;
        return (
            <div>
                {/* 이름: {this.props.name}, 서식지 지역: {this.props.area} */}
                이름: {name}, 서식지 지역: {area}
            </div>
        )
    }
}

export default Animal
